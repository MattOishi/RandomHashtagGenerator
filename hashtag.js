var wordListNonProfane = [
	'This',
	'Could',
	'Be',
	'Us',
	'But',
	'You',
	'Playing',
	'Why',
	'Is',
	'Mitch',
	'McConnell',
	'You',
	'Are',
	'Thot',
	'Ho',
	'We',
	'Yo',
	'Dawg',
	'Bro',
	'Brah',
	'Might',
	'New',
	'Album',
	'John',
	'Smith',
	'No',
	'Hey',
	'WorldStar',
	'Shameless',
	'Plug',
	'Spark',
	'Car',
	'Lambo',
	'Vine',
	'Instagram',
	'Will',
	'Had',
	'Your',
	'Nasty',
	'Hoodie',
	'Best',
	'Not',
	'Brother',
	'Hulk',
	'Hogan',
	'Butt',
	'Lil',
	'Wayne',
	'NWA',
	'DeLaSoul',
	'Flappy',
	'Bird',
	'iPhone',
	'Android',
	'Google',
	'Youtube',
	'January',
	'Febuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
	'Insane',
	'Madness',
	'Detroit',
	'NSA',
	'South',
	'North',
	'MFDoom',
	'Facebook',
	'Twitter',
	'Mexico',
	'Windows',
	'Linux',
	'Mac',
	'Cloud',
	'Ghetto',
	'Police',
	'Best',
	'Bullet',
	'Hoe',
	'Arrest',
	'Deport',
	'HealthCare',
	'Department',
	'A',
	'An',
	'Snoop',
	'Dogg',
	'Kanye',
	'West',
	'Drank',
	'Dranking',
	'Drunk',
	'Drink',
	'Drinking',
	'Purple',
	'Ocean',
	'Marine',
	'Inland',
	'Chinatown',
	'AllenPark',
	'4.0',
	'420',
	'Jimbles',
	'Notronbo',
	'Viper',
	'Dexter',
	'Is',
	'Mom',
	'Momma',
	'Dr',
	'Pants',
	'Jeans',
	'National',
	'Global',
	'Local',
	'Water',
	'Ice',
	'Problem',
	'Daft',
	'Punk',
	'Word',
	'Nas',
	'Life',
	'Tweet',
	'Vollyball',
	'Day',
	'Month',
	'Year',
	'Star',
	'Wars',
	'Obama',
	'Worst',
	'Did',
	'It',
	'Radio',
	'Stereo',
	'Duck',
	'Sauce',
	'The',
	'New',
	'York',
	'Times',
	'Pandora',
	'Rdio',
	'Spotify',
	'One',
	'Direction',
	'Sucks',
	'Right',
	'Wrong',
	'API',
	'Rest',
	'FontAwesome',
	'Black',
	'Tie',
	'Summer',
	'Winter',
	'Fall',
	'Spring',
	'Failing',
	'Gorillaz',
	'Groove',
	'Armada',
	'Superstylin\'',
	'Ocean',
	'Man',
	'Secret',
	'Django',
	'Ween',
	'Fatboy',
	'Slim',
	'Pictures',
	'Photos',
	'VHS',
	'DVD',
	'Deadmau5',
	'Mouse',
	'Play',
	'Pause',
	'Mute',
	'Turn',
	'Down',
	'Up',
	'For',
	'What',
	'Tinfoilboy',
	'Twitch',
	'Yamaha',
	'Ableton',
	'Röyksopp',
	'Eple',
	'Drupal',
	'Node.js',
	'Is',
	'Was',
	'Afroman',
	'Tumblr',
	'Tumbleweed',
	'Because',
	'Got',
	'Golf',
	'Yahoo',
	'Germany',
	'France',
	'French',
	'Florida',
	'Man',
	'Women',
	'Them',
	'They',
	'Sick',
	'Rhyme',
	'Time',
	'Tyme',
	'Records',
	'Cryptrarch',
	'Cryptard',
	'Exotic',
	'Ghost',
	'Hello',
	'Retro',
	'Retrograde',
	'East',
	'North',
	'South',
	'West',
	'Fart',
	'Hashtag',
	'Rare',
	'Legendary',
	'Pokemon',
	'Mon',
	'rest',
	'seven',
	'stuff',
	'always',
	'TooManyCooks',
	'&',
	'ago',
	'fit',
	'I',
	'Have',
	'the',
	'Power',
	'by',
	'the',
	'greyskull',
	'werds',
	'flight',
	'Hipster',
	'Hipsters',
	'Beatnik',
	'harajuku',
	'Otaku',
	'Grape',
	'Dark',
	'Drake',
	'eye',
	'Vex',
	'Interstellar',
	'MENS',
	'NO',
	'MORE',
	'Swift',
	'programming',
	'not',
	'Taylor',
	'brogramming',
	'Awoken',
	'6plus',
	'Galaxy',
	'Beast',
	'of',
	'Scalable',
	'Sudden',
	'be',
	'like',
	'404',
	'healthkit',
	'apps',
	'extra',
	'dribble',
	'fork',
	'forking',
	'clone',
	'Mad',
	'Max',
	'aspergers',
	'obsidian',
	'beta',
	'alpha',
	'grime',
	'dubstep',
	'house',
	'inthe',
	'swissalps',
	'German',
	'merica',
	'yolo',
	'swag',
	'grassroots',
	'Sauce',
	'bacon',
	'cheese',
	'flex',
	'noflex',
	'zone',
	'thou',
	'who',
	'drive',
	'drivers',
	'best',
	'bae',
	'ratchet',
	'awkward',
	'turtle',
	'can'

];
var profanity = [
	'Fucking',
	'Daym',
	'Damn',
	'Ass',
	'Cunt',
	'Asshole',
	'Bitch',
	'Dick',
	'Dickhole',
	'Cock',
	'Cockhole',
	'Tits'
];
var wordListProfane = wordListNonProfane.concat(profanity);
var helpers = require('./helpers.js');

exports.generateHashtag = function(profanityFilter)
{
	if (profanityFilter)
	{
		word1 = wordListProfane[Math.floor((Math.random()*wordListProfane.length))];
		word2 = wordListProfane[Math.floor((Math.random()*wordListProfane.length))];
		word3 = wordListProfane[Math.floor((Math.random()*wordListProfane.length))];
		if (helpers.allStringsEqual(word1, word2, word3)) {
			word1 = wordListProfane[Math.floor((Math.random()*wordListProfane.length))];
			word2 = wordListProfane[Math.floor((Math.random()*wordListProfane.length))];
			word3 = wordListProfane[Math.floor((Math.random()*wordListProfane.length))];
		}
	}
	else if (!profanityFilter)
	{
		word1 = wordListNonProfane[Math.floor((Math.random()*wordListNonProfane.length))];
		word2 = wordListNonProfane[Math.floor((Math.random()*wordListNonProfane.length))];
		word3 = wordListNonProfane[Math.floor((Math.random()*wordListNonProfane.length))];
		if (helpers.allStringsEqual(word1, word2, word3)) {
			word1 = wordListNonProfane[Math.floor((Math.random()*wordListNonProfane.length))];
			word2 = wordListNonProfane[Math.floor((Math.random()*wordListNonProfane.length))];
			word3 = wordListNonProfane[Math.floor((Math.random()*wordListNonProfane.length))];
		}
	}
	return { 'hashtag': '#' + word1 + word2 + word3, 'permalink': new Buffer(word1 + word2 + word3).toString('base64') }
};

exports.getPermalinkFromHashtag = function(hashtag)
{
	var perma = new Buffer(hashtag).toString('base64');
	return { 'hashtag': '#' + hashtag, 'permalink': perma }
};

exports.getHashtagFromPermalink = function(permalink)
{
	var hashtag = new Buffer(permalink, 'base64');
	return { 'hashtag': '#' + hashtag, 'permalink': permalink }
};