'use strict';

angular.module('deferredApp')
	.controller('QAllCtrl', function ($scope, $q, $timeout) {
		// Consider 2 or more events, which are carried out async
		// And you have no way of knowing which will finish first
		var loadingTwitterFeed = $q.defer();
		var loadingGPlusFeed = $q.defer();
		// Fake an Ajax call with random duration
		$timeout(function() {
			loadingTwitterFeed.reject('Twitter failed to load');
		}, Math.random() * 5000 );
		$timeout(function() {
			loadingGPlusFeed.resolve('Google+ loaded');
		}, Math.random() * 5000 );
		loadingTwitterFeed.promise.then(function(res){
			$scope.twitter = res;
		}, function(err){
			console.error(err);
		});
		loadingGPlusFeed.promise.then(function(res){
			$scope.gplus = res;
			console.debug(res);
		});

		// Guaranteed to only display after both have been loaded
		var bothPromise = $q.all([loadingTwitterFeed.promise, loadingGPlusFeed.promise]);
		// $q.all returns a promise object!
		bothPromise.then(function(results) {
			$scope.both = 'Both have been loaded';
		}, function(res){
			console.debug(res);
			$scope.both = 'This is the message from rejected promise: ' + res;
		});
		// Note that this works like a && and gets rejected at the first sign of trouble
	});
