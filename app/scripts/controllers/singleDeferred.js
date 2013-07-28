'use strict';

angular.module('deferredApp')
	.controller('SingleDeferredCtrl', function ($scope, $q, $http, $timeout) {
		// Manually creating a deferred object
		var manualDefer = $q.defer();
		manualDefer.promise.then(function(resolvedWith){
			console.debug(resolvedWith);
		}, function(rejectedWith) {
			console.error(rejectedWith);
		});
		// Resolving / Rejecting is a one time thing
		manualDefer.resolve('Everything s fine');
		// Therefore this will not do anything
		manualDefer.reject('Too late...');
		// Neither will this
		manualDefer.resolve('Too late too');

		// .then function can be called several times to add several callbacks to the promise's queue
		var anotherDefer = $q.defer();
		anotherDefer.promise.then(function(resolvedWith){
			console.debug('First', resolvedWith);
		}, function(){

		});
		anotherDefer.promise.then(function(resolvedWith){
			console.debug('Second', resolvedWith);
		}, function(){

		});
		anotherDefer.resolve('then function');

		// .then function can be added _after_ deferred object is resolved, and still be triggered
		var lateBloomingDefer = $q.defer();
		// Resolve immediately
		lateBloomingDefer.resolve('I m already resolved');
		lateBloomingDefer.promise.then(function(resolvedWith){
			console.debug(resolvedWith);
		}, function(){

		});
		$timeout(function() {
			lateBloomingDefer.promise.then(function(resolvedWith){
				console.debug("It's never too late with promises", resolvedWith);
			})
		}, 10000);
	});
