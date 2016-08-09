define(['angularMocks', 'app/light-box/lightBoxComponent'], function() {
  'use strict';
  // Test the lightbox controller
  describe('lightBoxController', function() {
    var httpBackend, lightBoxCtrl, lightBoxCtrlScope, interval, provide, location, 
        rootScope, componentController;
    var requestHandler;    
    
    //mock response data
    var responseData = {
        "total": 1,
        "data": {
            "lightbox": {
                "start": 0,
                "finish": 80,
                "duration": 1000
            }
        }
    };
    
    // Load the modules
    beforeEach( function() {
        module('mainApp');
        module('lightBox');
    });

    beforeEach(function(){
        // Just to be safer setting high value
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
        
        module(function($provide) {
           provide = $provide;
        }); 
    
        inject(function($componentController, $injector, $rootScope, $httpBackend, $interval, 
            $location) {
            
            // Save references to injected services and components
            httpBackend = $httpBackend;
            interval = $interval;
            location = $location;
            rootScope = $rootScope;
            componentController = $componentController;
            // mock scope
            lightBoxCtrlScope = $rootScope.$new();
            // mock response
            requestHandler = $httpBackend.whenGET('lightBoxData/data.json')
                .respond(responseData);
            
            // load the lightBox component(Object Under Test) injecting it with mock scope
            lightBoxCtrl = $componentController('lightBox', {
                $scope: lightBoxCtrlScope});            

        });
    });
    
    afterEach(function(){
        
    });

    it('should update the model data correctly', function() {
        // Given 
        // mocked scope - lightBoxCtrlScope
        jasmine.addCustomEqualityTester(angular.equals);
        
        // When
        // The http response data is received
        httpBackend.flush();
        // The progress bar data is updated
        interval.flush(1000); 
        
        // Verify the results
        expect(lightBoxCtrlScope.data).toEqual(responseData.data);
        expect(lightBoxCtrlScope.percentageDone).toEqual(responseData.data.lightbox.finish);
        expect(lightBoxCtrlScope.complete).toEqual(true);             
    });
    
    it('should handle progress bar close correctly', function() {  
        // Given 
        // mocked scope - lightBoxCtrlScope
        spyOn(location, 'path'); 

        // When            
        lightBoxCtrlScope.close();
        
        // Verify the results
        expect(location.path).toHaveBeenCalledWith('/default');
    });
    
    it('should reset itself correctly on reset event', function() {
        // Given
        // mocked scope - lightBoxCtrlScope
        // mocked promise
        lightBoxCtrlScope.intervalPromise = {};
        
        spyOn(interval, 'cancel'); 
        spyOn(lightBoxCtrlScope, 'loadProgressBar');
        
        // When
        // Broadcast will cause the light box to react and reset
        rootScope.$broadcast("reset");
        
        // Verify the results
        expect(interval.cancel).toHaveBeenCalledWith(lightBoxCtrlScope.intervalPromise);
        expect(lightBoxCtrlScope.complete).toEqual(false);
        expect(lightBoxCtrlScope.loadProgressBar).toHaveBeenCalled();
    });
    
    it('should handle the error correctly when the request to JSON data fetch for the progress bar fails', function() {
        // Given 
        // mocked scope - lightBoxCtrlScope
        var defaultProgressBarData = { 
            "lightbox": {
                "start": 0,
                "finish": 0,
                "duration": 0
            }  
        };
        requestHandler.respond(404, '');
        spyOn(location, 'path');            
        
        // When  
        // The http response data is received
        httpBackend.flush();
        
        // Verify the results
        expect(lightBoxCtrlScope.data).toEqual(defaultProgressBarData);
        expect(lightBoxCtrlScope.percentageDone).toEqual(0);
        expect(lightBoxCtrlScope.complete).toEqual(false);  
        expect(location.path).toHaveBeenCalledWith('/error');            
    });
  });
});
