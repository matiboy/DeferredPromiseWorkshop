'use strict';

angular.module('deferredApp')
  .controller('MainCtrl', function ($scope, $q, $timeout) {
  		$scope.responses = [];
		// Consider 2 or more events, which are carried out async
		// And you have no way of knowing which will finish first
		var loadingTwitterFeed = $q.defer();
		var loadingGPlusFeed = $q.defer();
		// Fake an Ajax call with random duration
		$timeout(function() {
			loadingTwitterFeed.resolve('Twitter loaded');
		}, Math.random() * 5000 );
		$timeout(function() {
			loadingGPlusFeed.resolve('Google+ loaded');
		}, Math.random() * 5000 );
		loadingTwitterFeed.promise.then(function(res){
			console.debug(res);
			$scope.responses.push(res);
		});
		loadingGPlusFeed.promise.then(function(res){
			console.debug(res);
			$scope.responses.push(res);
		});
		// These 2 console.debug will be in random order
		// The one below however will _always_ come after

		// Guaranteed to only display after both have been loaded
		var bothPromise = $q.all([loadingTwitterFeed.promise, loadingGPlusFeed.promise]);
		// $q.all returns a new promise object
		bothPromise.then(function(results) {
			console.debug(results);
			$scope.responses.push('Both have been loaded');
		});
	});
