'use strict';

angular.module('deferredApp')
	.controller('QThenCtrl', function ($scope, $q, $http) {
		// $http returns a promise
		var httpPromise = $http.get('http://randomthings.blob');
		// var httpPromise = $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=Somerset,%20Kuala%20Lumpur,%20Malaysia&sensor=false');
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

		// // Rejecting new promise
		// var rejectingPromise = httpPromise.then(function(fullResponse){
		// }, function(err){
		// 	console.error('In second then', err); 
		// 	// This is how to reject new promise
		// 	throw {
		// 		success: false,
		// 		reason: err
		// 	}
		// });
		// // Maybe surprisingly, if we return something in the previous error callback, 
		// // the new promise is _resolved_ with that return value
		// modifiedDataPromise.then(function(data){
		// 	console.debug('In success callback of new promise', data);
		// }, function(err){
		// 	console.error('In error callback of new promise', err);
		// });
	});
