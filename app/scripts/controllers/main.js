'use strict';

angular.module('deferredApp')
    .controller('MainCtrl', function ($scope, $q, $http, $timeout) {
		// Manually creating a deferred object
		var manualDefer = $q.defer();
		manualDefer.promise.then(function(resolvedWith){
			console.debug(resolvedWith);
			$scope.response = resolvedWith;
		}, function(rejectedWith) {
			console.error(rejectedWith);
			$scope.error = rejectedWith;
		});
		// Resolving / Rejecting is a one time thing
		manualDefer.resolve('Everything s fine');
		// Therefore this will not do anything
		manualDefer.reject('Too late...');
		// Neither will this
		manualDefer.resolve('Too late too');

		// .then function can be called several times to add several callbacks to the promise's queue
		// $scope.response = [];
		// var anotherDefer = $q.defer();
		// anotherDefer.promise.then(function(resolvedWith){
		// 	console.debug('First', resolvedWith);
		// 	$scope.response.push('One callback');
		// }, function(){

		// });
		// anotherDefer.promise.then(function(resolvedWith){
		// 	console.debug('Second', resolvedWith);
		// 	$scope.response.push('Two callbacks');
		// }, function(){

		// });
		// anotherDefer.resolve('then function');

		// .then function can be added _after_ deferred object is resolved, and still be triggered
		// var lateBloomingDefer = $q.defer();
		// // Resolve immediately
		// lateBloomingDefer.resolve('I m already resolved');

		// // Add the callbacks _after_ resolution
		// lateBloomingDefer.promise.then(function(resolvedWith){
		// 	$scope.response = resolvedWith;
		// 	console.debug(resolvedWith);
		// }, function(){

		// });
		// $timeout(function() {
		// 	lateBloomingDefer.promise.then(function(resolvedWith){
		// 		console.debug("It's never too late with promises", resolvedWith);
		// 		$scope.response = '5s later, ' + resolvedWith;
		// 	})
		// }, 5000);
	});
