require("dotenv").config();

var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var keys = require('./keys');

// Access to keys
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



if (process.argv[2]==='my-tweets') {
		myTweets()
	} else if (process.argv[2]==='spotify-this-song') {
		findSong();
	}


// * `my-tweets`
function myTweets(){
	var params = {screen_name: 'Kevin56614561'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error)
    console.log(JSON.stringify(tweets, null, 2));
});
}

// * `spotify-this-song`

function findSong(){
	spotify
	.search({ type: 'track', query: process.argv[3], limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
	// console.log(JSON.stringify(data, null, 2));
	
	var result = data.tracks.items[0];
	// console.log(result);
	 track = {
	 		artist: result.artists[0].name,
	 		trackName: result.name,
	 		preview: result.external_urls.spotify,
	 		album: result.album.name
		};

	console.log("Artist: " + track.artist);
	console.log("Track: " + track.trackName);
	console.log("Preview: " + track.preview);
	console.log("Album: " + track.album);

	});
};
// * `movie-this`

// * `do-what-it-says`
