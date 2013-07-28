'use strict';

angular.module('deferredApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/singleDeferred', {
        templateUrl: 'views/singleDeferred.html',
        controller: 'SingleDeferredCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
