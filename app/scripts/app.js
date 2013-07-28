'use strict';

angular.module('deferredApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cleanHttp', {
        templateUrl: 'views/cleanHttp.html',
        controller: 'CleanHttpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
