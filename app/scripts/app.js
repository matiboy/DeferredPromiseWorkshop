'use strict';

angular.module('deferredApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/videoPlayer', {
        templateUrl: 'views/videoPlayer.html',
        controller: 'VideoPlayerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
