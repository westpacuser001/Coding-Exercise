define(['angularMocks', 'app/main/westpac/lightBoxService'], function() {
    'use strict';
    describe('lightBoxService', function() {
      var httpBackend;
      var lightBoxService;
      var lightBoxDataRequest;
      //mock response data
      var mockLightBoxData = {
        "total": 1,
        "data": {
            "lightbox": {
            "start": 0,
            "finish": 80,
            "duration": 1000
           }
        }
      };

      beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
      });

      beforeEach(module('mainApp'));

      beforeEach(inject(function($httpBackend, $injector) {
        httpBackend = $httpBackend;
        lightBoxDataRequest = httpBackend.whenGET('lightBoxData/data.json').respond(mockLightBoxData);
        lightBoxService = $injector.get('lightBoxService');
      }));


      it('should fetch the light box data successfully', function() {
        // Given  
        var success = jasmine.createSpy();
        var failure = jasmine.createSpy();
        lightBoxService.getData().then(success, failure);
        
        // When
        httpBackend.flush();
        
        // Verify the results
        expect(success).toHaveBeenCalled();
        expect(failure).not.toHaveBeenCalled();
      });
      
      it('should report failure for the fetch of the light box data', function() {
        // Given       
        var success = jasmine.createSpy();
        var failure = jasmine.createSpy();
        lightBoxService.getData().then(success, failure);
        lightBoxDataRequest.respond(404,'error message');
        
        // When
        httpBackend.flush();
        
        // Verify the results
        expect(success).not.toHaveBeenCalled();
        expect(failure).toHaveBeenCalled();
      });

    });

});
