define(['angularRoute', 'angular', 'jquery', 'app/light-box/lightBoxModule'], function () {
  'use strict';
  var app = angular.module('mainApp', ['ngRoute', 'lightBox']);

  // Bootstraping Angular
  app.init = function () {
    angular.bootstrap(document, ['mainApp']);
  };
  
  return app;
});
