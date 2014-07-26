var express = require('express');
var app = express();
var hashtag = require('./hashtag.js');

app.use('/', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	if (req.query.profanity)
	{
		var hashtagObj = hashtag.generateHashtag(true);
	}
	else if (!req.query.profanity)
	{
		var hashtagObj = hashtag.generateHashtag();
	}
	res.locals.title = "Random Hashtag Generator";
	res.locals.hashtag = hashtagObj.hashtag;
	res.locals.permalink = hashtagObj.permalink;
	res.render('index');
});

app.get('/api/', function(req, res) {
	res.locals.title = "API - Random Hashtag Generator";
	res.render('api');
});

// API functions here

app.get('/api/hashtag/generate/', function(req, res) {
	var hashtagObj = hashtag.generateHashtag();
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ hashtag: hashtagObj.hashtag, permalink: 'http://hashtag.tinfoilboy.com/#' + hashtagObj.permalink }));
});

app.get('/api/hashtag/generate/profane/', function(req, res) {
	var hashtagObj = hashtag.generateHashtag(true);
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ hashtag: hashtagObj.hashtag, permalink: 'http://hashtag.tinfoilboy.com/#' + hashtagObj.permalink }));
});

app.get('/api/hashtag/permalink/', function(req, res) {
	if (req.query.hashtag)
	{
		var perma = hashtag.getPermalinkFromHashtag(req.query.hashtag);
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ hashtag: perma.hashtag, permalink: 'http://hashtag.tinfoilboy.com/#' + perma.permalink }));
	}
	else
	{
		res.end(JSON.stringify({ error: "Hashtag not specified!" }));
	}
});

app.get('/api/permalink/hashtag/', function(req, res) {
	if (req.query.permalink)
	{
		var hash = hashtag.getHashtagFromPermalink(req.query.permalink);
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ hashtag: hash.hashtag, permalink: 'http://hashtag.tinfoilboy.com/#' + hash.permalink }));
	}
	else
	{
		res.end(JSON.stringify({ error: "Permalink not specified!" }));
	}
});

app.get('/takedown/', function(req, res) {
	res.locals.title = "Takedown - Random Hashtag Generator";
	res.render('takedown');
});

app.use(function(req, res, next){
    res.status(404).render('404');
});

app.listen(1337);