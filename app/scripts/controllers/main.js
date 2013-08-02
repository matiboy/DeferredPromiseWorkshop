'use strict';

angular.module('deferredApp')
  .controller('MainCtrl', function ($scope, $q, $http) {
		// $http uses the promise API
		var httpPromise = $http.jsonp('http://api-epg.astro.com.my/api/pack?format=jsonp&callback=JSON_CALLBACK');
		httpPromise.then(function(fullResponse){
			console.debug(fullResponse);
			$scope.response = fullResponse;
		}, function(error){
			console.error(error);
		});
		// var wrongUrlPromise = $http.get('http://angularjs.pt');
		// wrongUrlPromise.then(function(fullResponse){
		// 	console.debug(fullResponse);
		// }, function(error){
		// 	console.error(error);
		// 	$scope.response = error;
		// });

		// // Manually creating a deferred object
		// var manualDefer = $q.defer();
		// manualDefer.promise.then(function(resolvedWith){
		// 	console.debug(resolvedWith);
		// 	$scope.response = resolvedWith;
		// }, function(rejectedWith) {
		// 	console.error(rejectedWith);
		// });
		// // Resolve the object
		// manualDefer.resolve('Everything s fine');

		// // Manually creating a deferred object
		// var soonToBeRejectedDefer = $q.defer();
		// soonToBeRejectedDefer.promise.then(function(resolvedWith){
		// 	console.debug(resolvedWith);
		// }, function(rejectedWith) {
		// 	$scope.response = rejectedWith;
		// 	console.error(rejectedWith);
		// });
		// soonToBeRejectedDefer.reject('Oops something went wrong');
	});
