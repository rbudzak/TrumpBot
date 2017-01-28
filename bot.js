const Twit = require('twit');
var config = require('./config') // Load config file with access keys and tokens

var T = new Twit(config);

console.log('The bot is starting');

var params = {};

var stream = T.stream('statuses/filter', {follow: '15934386'}); // Currently follows me

var count = 0;

stream.on('tweet', function (tweet) {
  console.log("They tweeted!");
});

// function tweetTrump(){
//   console.log('Tweeting Trump!');
//   var tweet = 'STFU DONNY';
//   T.post('statuses/update', tweet, tweeted);
// };