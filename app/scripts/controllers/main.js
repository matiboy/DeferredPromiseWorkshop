'use strict';

angular.module('deferredApp')
    .controller('MainCtrl', function ($scope, $q, $http) {
		// Resolving only accepts a single value
		var manualDefer = $q.defer();
		manualDefer.promise.then(function(resolvedWith, moreInfo){
			console.debug(resolvedWith, moreInfo);
		}, function() {
		});
		// Resolving only accepts a single value
		manualDefer.resolve('I can only resolve with one value', 'Not 2');

		// Of course, that value could be an array
		// var passingMoreInfo = $q.defer();
		// passingMoreInfo.promise.then(function(resolvedWith){
		// 	console.debug(resolvedWith);
		// }, function() {
		// });
		// passingMoreInfo.resolve(['There', 'you', 'go']);

		// Or anything else
		// var resolvingWithACallback = $q.defer();
		// resolvingWithACallback.promise.then(function(cb){
		// 	cb();
		// }, function() {
		// });
		// resolvingWithACallback.resolve(angular.bind(console, console.log, 'Hi!'));
		// Same effect as 
		// resolvingWithACallback.resolve(function() {
		//	console.log('Hi!');
		// })
	});
