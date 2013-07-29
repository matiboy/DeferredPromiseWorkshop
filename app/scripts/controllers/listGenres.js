'use strict';

angular.module('deferredApp')
  .controller('ListGenresCtrl', function ($scope, dataService) {
    $scope.genres = dataService.loadGenres();
  });
