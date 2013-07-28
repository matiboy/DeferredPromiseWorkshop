'use strict';

angular.module('deferredApp')
	.factory('apiInterface', function ($http) {
		// Public API here
		return {
			loadPack: function () {
				// Highest level of abstraction, only loads the pack, not caring for data format
				return $http.jsonp('http://api-epg.astro.com.my/api/pack?format=jsonp&callback=JSON_CALLBACK');
			}
		};
	});
