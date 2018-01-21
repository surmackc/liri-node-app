# liri-node-app

This is a command line application - similar to SIRI, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters, runs server side requests, and returns the data.

Commands you can run:  node liri.js command "search"

"my-tweets" - this will display up to my 20th most recent tweets (from a dummy account)

"movie-this" "search" - run "movie-this" as the argv2 and whatever movie you want to search for as argv3.  

"spotify-this-song" "search" - run "spotify-this-song" as the argv2 and whatever song you want to search for as argv3.  

"do-what-it-says" - takes the text from random.txt file and executes the text as the command line arguments.


dotenv file necessary to run:

Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

This file will be used by the dotenv package to set environment variables to the global process.env object in node. These are values that are specific to the computer that node is running on. This file is .gitignore to keep API key information private.
