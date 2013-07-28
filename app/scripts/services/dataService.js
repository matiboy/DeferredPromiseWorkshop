'use strict';

angular.module('deferredApp')
	.factory('dataService', function (apiInterface) {
		return {
			loadChannels: function() {
                // Take the data from api and modify it to suit our needs
                return apiInterface.loadPack().then(function(fullResponse){
                    var channels = fullResponse.data.services;
                    channels = _.map(channels, function(channel){
                        return {
                            title: channel.title,
                            number: channel.channel_number
                        };
                    });
                    return channels;
                });
            }
		};
	});