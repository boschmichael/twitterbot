var Twit = require('twit'),
    config = {
      twitter: {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
        access_token: ACCESS_TOKEN,
        access_token_secret: ACCESS_TOKEN_SECRET
      }
    },
    T = new Twit(config.twitter);

var stream = T.stream('statuses/filter', { track: '#seminar2017'})
stream.on('tweet', function (tweet) {
  if (tweet.name !== "Max Mustermann") {
    tweetIt(tweet.text + " " + Math.floor(Math.random()*100)); 
  }
})


function tweetIt(tweetText) {
    tweet = {
      status: tweetText 
    };

    T.post('statuses/update', tweet , function(err, data, response) {
      if (err){
        console.log('Error!');
      }
    });
}