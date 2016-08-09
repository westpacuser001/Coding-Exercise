'use strict';

var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
      console.log("Mustan");
      console.log(file);
    }
  }
}

require.config({
    baseUrl: '/base',    
    paths: {
        'app': 'ui/app',
        'angular': 'bower_components/angular/angular',
        'angularRoute': 'bower_components/angular-route/angular-route.min',
        'angularAnimate': 'bower_components/angular-animate/angular-animate.min',
        'angularMocks': 'bower_components/angular-mocks/angular-mocks',
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
        'angularMocks': {
	       deps: ['angular']
	    },
		'jquery': {
	        exports: '$'
	    }
	},
    
    // ask Require.js to load these files (all our tests)
    deps: tests,// e.g '/base/ui/app/light-box/LightBoxComponent.spec.js'

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
