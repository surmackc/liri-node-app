require("dotenv").config();

var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var keys = require('./keys');
var request = require("request");


// Access to keys
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



if (process.argv[2]==='my-tweets') {
		myTweets()
	} else if (process.argv[2]==='spotify-this-song') {
		findSong();
	} else if (process.argv[2]==='movie-this') {
		findMovie();
	}


// * `my-tweets`
function myTweets(){
	
	var params = {screen_name: 'Kevin56614561',
				  limit: 20
					};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error)
			for (var i = 0; i < tweets.length; i++){
    		console.log(JSON.stringify(tweets[i].text, null, 2));
			}
	});
};


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

function findMovie(){
	request("http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
  	
  	if (!error && response.statusCode === 200) {

    	var result = (JSON.parse(body));

    	movie = {
    		Title: result.Title,
    		Year: result.Year,
    		Rated: result.Rated,
    		Rotten_Tomatoes: result.Ratings[1],
    		Country: result.Country,
    		Language: result.Language,
    		Plot: result.Plot,
    		Actors: result.Actors
    	};
    	console.log(movie);
  	}

	});

};

// * `do-what-it-says`
