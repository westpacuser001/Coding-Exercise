define(['app/main/mainAppModule'], function(mainApp) {
	'use strict';
	mainApp.controller('MainController', ['$scope', '$location',
		function ($scope, $location) {
            $scope.reset = function() {
                $location.path('/lightBox');
                $scope.$broadcast('reset');
            };
		}
	]);
});