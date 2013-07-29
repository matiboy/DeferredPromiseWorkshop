'use strict';

angular.module('deferredApp')
	.factory('dataService', function (apiInterface, $cacheFactory, $q) {
		var cache = $cacheFactory('dataService');
		var packKey = 'pack';

		function extractChannelsFromPack(pack) {
			var channels = pack.services;
			channels = _.map(channels, function(channel){
				return {
					title: channel.title,
					number: channel.channel_number
				};
			});
			return channels;
		}

		function extractGenresFromPack(pack) {
			var genres = pack.genres;
			genres = _.map(genres, function(genre){
				return {
					title: genre.title
				};
			});
			return genres;
		}

		return {
			loadChannels: function() {
				var pack = cache.get(packKey);
				// Cache is synchronous. Controller expects Async, so use $q
				if(pack){
					console.debug('Reading channels data from cache');
					var q = $q.defer();
					q.resolve(extractChannelsFromPack(pack));
					return q.promise;
				}
				// Take the data from api and modify it to suit our needs
				return apiInterface.loadPack().then(function(fullResponse){
					cache.put(packKey, fullResponse.data);
					return extractChannelsFromPack(fullResponse.data);
				});
			},
			loadGenres: function() {
				var pack = cache.get(packKey);
				// Cache is synchronous. Controller expects Async, so use $q
				if(pack){
					console.debug('Reading genres data from cache');
					var q = $q.defer();
					q.resolve(extractGenresFromPack(pack));
					return q.promise;
				}
				// Take the data from api and modify it to suit our needs
				return apiInterface.loadPack().then(function(fullResponse){
					cache.put(packKey, fullResponse.data);
					return extractGenresFromPack(fullResponse.data);
				});
			}
		};
	});