'use strict';

angular.module('deferredApp')
	.controller('CleanHttpCtrl', function ($scope, dataService) {
		// Using 2 levels of abstraction, Controller has no knowledge of apiInterface
		// Controller expects a promise object which will resolve with an array of channels
		$scope.channels = dataService.loadChannels();
	});
