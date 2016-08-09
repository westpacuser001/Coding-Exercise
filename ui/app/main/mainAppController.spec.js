define(['angularMocks', 'app/main/mainAppController'], function() {
    'use strict';
    describe('mainAppController', function() {
      var mainCtrlScope, mainCtrl;  
      var location;

      beforeEach(module('mainApp'));

      beforeEach(inject(function($controller, $rootScope, $location) {
         
        // Save references to injected services and components  
        location = $location;  
        
        mainCtrlScope = $rootScope.$new();
        mainCtrl = $controller('MainController', {
                    $scope: mainCtrlScope});
      }));


      it('should reset the page correctly', function() {
        // Given  
        spyOn(location, 'path');
        spyOn(mainCtrlScope, '$broadcast');
        
        // When
        mainCtrlScope.reset();
        
        // Verify the results
        expect(location.path).toHaveBeenCalledWith('/lightBox');
        expect(mainCtrlScope.$broadcast).toHaveBeenCalled();
      });

    });

});