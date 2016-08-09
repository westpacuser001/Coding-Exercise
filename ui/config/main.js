require.config({
    baseUrl: '.',    
    paths: {
        'app': 'ui/app',
		'comps': 'app/components',
		'services': 'app/services',
		'filters': 'app/filters',
        'angular': 'bower_components/angular/angular',
        'angularRoute': 'bower_components/angular-route/angular-route.min',
        'angularAnimate': 'bower_components/angular-animate/angular-animate.min',
        'jquery': 'bower_components/jquery/dist/jquery.min',
    },  
	// shim: To load external global libraries as AMD locals references 
	shim: {
		'angular': {
	       exports: 'angular'
	    },
        'angularRoute': {
	       deps: ['angular']
	    },
        'angularAnimate': {
	       deps: ['angular']
	    },
		'jquery': {
	        exports: '$'
	    }
	}
});

// Loading all base modules
require(['app/main/mainAppModule',
    'app/main/mainAppController',
    'app/light-box/lightBoxComponent'    
    ], 
    function(mainApp) {
        'use strict';
        angular.
        module('mainApp').
        config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {
                $routeProvider.
                when('/lightBox', {
                    template: '<light-box></light-box>'
                }).
                when('/default', {
                    templateUrl: 'other.html'
                }).
                when('/error', {
                    templateUrl: 'error.html'
                }).
                otherwise('/lightBox');
             }
        ]);
        // Bootstrap angular
	    mainApp.init();
});
