'use strict';

angular.module('deferredApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/qThen', {
        templateUrl: 'views/qThen.html',
        controller: 'QThenCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
