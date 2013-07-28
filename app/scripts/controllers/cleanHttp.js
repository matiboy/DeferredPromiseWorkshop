'use strict';

angular.module('deferredApp')
	.controller('CleanHttpCtrl', function ($scope, dataService) {
		// Using 2 levels of abstraction, Controller has no knowledge of apiInterface
		// Controller expects a promise object which will resolve with an array of simple channel objects
		$scope.channels = dataService.loadChannels();
	});
