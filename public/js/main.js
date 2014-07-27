var client;

function b64_to_utf8(str) {
	return unescape(decodeURIComponent(window.atob(str)));
}

$(function() {
	if(window.location.hash) {
		var hashtag;
		$.ajax({
			url: '/api/permalink/hashtag/?permalink=' + window.location.hash.substring(1, window.location.hash.length),
			type: 'GET',
			dataType: 'json',
		}).done(function(data) {
			console.log(data.hashtag);
			hashtag = data.hashtag;
			$('title').text(hashtag + ' - Random Hashtag Generator');
			$('.hashtag').text(hashtag);
		}).always(function() {
			console.log("this should be executed afterwards");
			$('.social.buttons').find('#permalink').attr('data-clipboard-text', 'http://hashtag.tinfoilboy.com/' + window.location.hash);
			$('.social.buttons').find('.twitter-share-button').attr('data-url', 'http://hashtag.tinfoilboy.com/' + window.location.hash);
		});
	}
	$(document).on('click', '#try-again', function(event) {
		event.preventDefault();
		$('.hashtag').slideUp('slow');
		$('.social.buttons').slideUp('slow', function() {
			$.ajax({
				url: (document.URL.indexOf('profanity=1') != -1) ? '/api/hashtag/generate/profane/' : '/api/hashtag/generate/',
				type: 'GET',
				dataType: 'json',
			}).done(function(data) {
				$('title').text(data.hashtag + ' - Random Hashtag Generator');
				$('.hashtag').text(data.hashtag);
				$('#permalink').attr('data-clipboard-text', data.permalink);
			}).always(function() {
				$('.hashtag').slideDown('slow');
				$('.social.buttons').slideDown('slow');
				twttr.widgets.load();
			});
		});
	});
	$('.hashtag').slideDown('slow');
	$('.social.buttons').slideDown('slow');
	client = new ZeroClipboard($('#permalink').get(0));
	client.on("ready", function(readyEvent) {
		client.on("aftercopy", function(event) {
			$('#copy.alert').slideDown('fast');
			setTimeout(function() {
				$('#copy.alert').slideUp('fast');
			}, 2000);
  		});
	});
});