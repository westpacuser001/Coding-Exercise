define(['angular', 'app/light-box/lightBoxModule', 'app/main/westpac/lightBoxService'], function() {
'use strict';    
angular.
  module('lightBox').
  component('lightBox', {
    templateUrl: 'ui/app/light-box/lightBoxTemplate.html',
    controller: ['lightBoxService', '$scope', '$location', '$interval',
      function lightBoxController(lightBoxService, $scope, $location, $interval) {
          //Initializing data model
          $scope.percentageDone = 0;
          $scope.complete = false;
          //default
          $scope.data = { 
            "lightbox": {
                "start": 0,
                "finish": 0,
                "duration": 0
            }  
          };
          $scope.intervalPromise = null;
          
          //function to load data json to show the progress
          $scope.loadProgressBar = function() {
            // Loading progress bar data
            lightBoxService.getData().then(
                // Success
                function (data) {
                    console.log("getData Success");
                    console.log(data);
                    $location.path("/lightBox");
                    $scope.data = data.data.data;
                    $scope.updateProgressBarData();
                },
                // Failure
                function (err) {
                    console.log("getData Failed");
                    console.log(err);
                    $scope.err = err;
                    // you can pass err to the error page but 
                    // for now keeping it simple
                    $location.path("/error");
            });     
          };
          
          $scope.updateProgressBarData = function(){
              var start = $scope.data.lightbox.start;
              var finish = $scope.data.lightbox.finish;
              var duration = $scope.data.lightbox.duration;
              var noOfIterations = finish - start;
              var intervalSlot = duration/noOfIterations;
              $scope.percentageDone = start;
              $scope.intervalPromise = $interval(function(){
                    $scope.percentageDone+=1;
                    
                    if($scope.percentageDone === finish) {
                        $scope.complete = true;
                    }
                }, 
                intervalSlot, 
                noOfIterations);
          };
          
          $scope.close = function () {
              $location.path("/default");    
          };
          
          $scope.$on("reset", function(){
            console.log("Received Reset event");  
            if($scope.intervalPromise) {
                $interval.cancel($scope.intervalPromise);
            }
            $scope.complete = false;
            $scope.loadProgressBar();  
          });
          
          $scope.loadProgressBar();    
      }
    ]
  });
});