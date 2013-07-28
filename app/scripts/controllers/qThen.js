'use strict';

angular.module('deferredApp')
	.controller('QThenCtrl', function ($scope, $q, $http) {
		// $http returns a promise
		var httpPromise = $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=Somerset,%20Kuala%20Lumpur,%20Malaysia&sensor=false');
		// The promise gets resolved with the full http response, including headers, etc.
		httpPromise.then(function(fullResponse){
			console.debug(fullResponse);
		});

		$scope.address = httpPromise;

		// Using .then, we can arrange the data to our preference
		var modifiedDataPromise = httpPromise.then(function(fullResponse){
			// The new promise created by .then is resolved with the return value of this function
			return fullResponse.data.results[0].formatted_address;
		});
		modifiedDataPromise.then(function(data){
			console.debug(data);
		}, function(err){

		});
		$scope.betterAddress = modifiedDataPromise;
	});
