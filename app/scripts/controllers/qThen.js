'use strict';

angular.module('deferredApp')
	.controller('QThenCtrl', function ($scope, $q, $http) {
		// $http returns a promise
		var httpPromise = $http.get('http://randomthings.blob');
		// The promise gets resolved with the full http response, including headers, etc.
		httpPromise.then(function(fullResponse){
			console.debug(fullResponse);
		}, function(err){
			console.error('In first then', err);
		});

		// Using .then to propagate rejection
		var modifiedDataPromise = httpPromise.then(function(fullResponse){
		}, function(err){
			console.error('In second then', err); 
			return err;
		});
		// Maybe surprisingly, if we return something in the previous error callback, 
		// the new promise is _resolved_ with that return value
		modifiedDataPromise.then(function(data){
			console.debug('In success callback of new promise', data);
		}, function(err){
			console.error('In error callback of new promise', err);
		});

		// Rejecting new promise
		// var rejectingPromise = httpPromise.then(function(fullResponse){
		// }, function(err){
		// 	console.error('In second then', err); 
		// 	// This is how to reject new promise
		// 	throw {
		// 		success: false,
		// 		reason: err
		// 	}
		// });
		// // Rejected promise
		// rejectingPromise.then(function(data){
		// 	console.debug('In success callback of new promise', data);
		// }, function(err){
		// 	console.error('In error callback of new promise', err);
		// });

		// // Which means that we can make a rejection into a resolve and vice-versa
		// var doesntExistPromise = $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=SomeplaceThatDoesntExist&sensor=false');
		// var rejectingResolvedPromise = doesntExistPromise.then(function(fullResponse){
		// 	// Response is successful, but without results, we want to reject this promise
		// 	if(fullResponse.data.results.length == 0)
		// 	throw {
		// 		success: false,
		// 		reason: 'No results'
		// 	}
		// }, function(err){
		// 	// $http didn't fail so no error
		// });
		// // Rejected promise
		// rejectingResolvedPromise.then(function(data){
		// 	// Though previous promise was successful, this one isn't
		// }, function(err){
		// 	console.error(err);
		// 	$scope.betterAddress = 'No results, sorry';
		// });
	});
