'use strict';

angular.module('deferredApp')
	.controller('VideoPlayerCtrl', function ($scope, $q, whichVideo) {
		var playerDeferred = $q.defer();
		var videoInfoPromise = whichVideo.get();
		var player;
		// Creation of player is Asynchronous, and there is no way of knowing how long it will take
		window.onYouTubeIframeAPIReady = function() {
			player = new YT.Player('player', {
				height: '390',
				width: '640',
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
		}

		// 4. The API will call this function when the video player is ready.
		window.onPlayerReady = function(event) {
			$scope.$apply( playerDeferred.resolve );
			// event.target.playVideo();
		}

		window.onPlayerStateChange = function(event) {
			console.log(event);
		}

		// Here we are guaranteed that the video player is loaded AND that we have the video ID
		// This avoids any risk of race condition
		$q.all([playerDeferred.promise, videoInfoPromise]).then(function(results) {
			var video = results[1];
			player.loadVideoById(video.code);
			player.playVideo();
		})
	});
