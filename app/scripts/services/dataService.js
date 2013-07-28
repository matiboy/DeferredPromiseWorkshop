'use strict';

angular.module('deferredApp')
	.factory('dataService', function (apiInterface) {
		return {
			loadChannels: function() {
                return apiInterface.loadPack().then(function(fullResponse){
                    return fullResponse.data;
                });
            }
		};
	});