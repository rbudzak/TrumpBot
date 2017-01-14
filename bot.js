const Twit = require('twit');
var config = require('./config')

console.log('The bot is starting');

var T = new Twit(config);