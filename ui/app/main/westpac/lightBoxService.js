define(['app/main/mainAppModule'], function(mainApp) {
    'use strict';
	mainApp.factory('lightBoxService', ['$http', '$rootScope', '$q',
		function ($http, $rootScope, $q) { 
            // Endpoint to query lightBox json data
            var lightBoxDataUrl = "lightBoxData/data.json";
            
			return {     
                getData: function() {
                    var deferred = $q.defer();
                    var req = {
                        method: 'GET',
                        url: lightBoxDataUrl,
                    };    
                    
                    $http(req).then(function (data) {
                        deferred.resolve(data);                        
                    }, function (err) {
                        deferred.reject(err);
                    }); 
                    
                    return deferred.promise;
                }			
			};
		}
	]);
});