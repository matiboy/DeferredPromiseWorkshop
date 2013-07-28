'use strict';

angular.module('deferredApp')
	.controller('SingleDeferredCtrl', function ($scope, $q, $http) {
		// 2 more things
		// .always - Not available in 1.1.2
		var manualDefer = $q.defer();
		manualDefer.promise.then(function(resolvedWith){
			console.debug(resolvedWith);
		}, function(rejectedWith) {
			console.error(rejectedWith);
		});

		manualDefer.promise.always(function(value){
			console.log('Whether rejected or resolved... but without value', value);
		});
		// Resolve the object
		manualDefer.resolve('Everything s fine');

		// .always on reject
		var rejectedDefer = $q.defer();
		rejectedDefer.promise.then(function(resolvedWith){
			console.debug(resolvedWith);
		}, function(rejectedWith) {
			console.error(rejectedWith);
		});

		rejectedDefer.promise.always(function(value){
			console.log('Whether rejected or resolved... but without value', value);
		});
		// Resolve the object
		rejectedDefer.reject('Reject');



		// Promises in the template
		var visibleDefer = $q.defer();
		
		visibleDefer.resolve("I'm a promise that gets displayed!");

		$scope.message = visibleDefer.promise;

		// Promises in the template
		var rejectedVisibleDefer = $q.defer();
		
		rejectedVisibleDefer.reject('What will happen to me?');

		$scope.rejectedMessage = rejectedVisibleDefer.promise;
	});
