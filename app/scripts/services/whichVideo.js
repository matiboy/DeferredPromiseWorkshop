'use strict';

angular.module('deferredApp')
	.factory('whichVideo', function ($q, $timeout) {
		return {
			get: function() {
				// Fake a $http call for now
				var q = $q.defer();
				$timeout(function() {
					q.resolve({
						title: 'AngularJS 1.2 and beyond', 
						code: 'W13qDdJDHp8'});
				}, Math.random()*2000)
				return q.promise;
			}
		}
	});
