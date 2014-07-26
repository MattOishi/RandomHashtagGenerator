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
			$('.social.buttons').find('#permalink').attr('data-clipboard-text', 'http://hashtag.tinfoilboy.com/' + window.location.hash);
			$('.social.buttons').find('.twitter-share-button').attr('data-url', 'http://hashtag.tinfoilboy.com/' + window.location.hash);
		});
	}
	$(document).on('click', '#try-again', function(event) {
		event.preventDefault();
		$('.social.buttons').slideUp('slow');
		$.ajax({
			url: document.URL,
			type: 'GET',
			dataType: 'html',
		}).done(function(data) {
			console.log($(data).filter('.vertical').find('.hashtag'));
			$('title').text($(data).filter('.vertical').find('.hashtag').text() + ' - Random Hashtag Generator')
			$('.hashtag').replaceWith($(data).filter('.vertical').find('.hashtag'));
			$('#permalink').attr('data-clipboard-text', $(data).filter('.vertical').find('.social.buttons').find('#permalink').attr('data-clipboard-text'));
			$('.hashtag').slideDown('slow');
			$('.social.buttons').slideDown('slow');
			twttr.widgets.load();
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