'use strict';

angular.module('deferredApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/qAll', {
        templateUrl: 'views/qAll.html',
        controller: 'QAllCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
