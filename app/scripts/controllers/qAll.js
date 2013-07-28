'use strict';

angular.module('deferredApp')
	.controller('QAllCtrl', function ($scope, $q, $timeout) {
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
			$scope.twitter = res;
		});
		loadingGPlusFeed.promise.then(function(res){
			$scope.gplus = res;
		});

		// Guaranteed to only display after both have been loaded
		var bothPromise = $q.all([loadingTwitterFeed.promise, loadingGPlusFeed.promise]);
		// $q.all returns a promise object!
		bothPromise.then(function(results) {
			console.debug(results);
			$scope.both = 'Both have been loaded';
		});
	});
