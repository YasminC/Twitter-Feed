
//install dependancies
var Twit = require('twit');
var colors = require('colors');

//create randomise function for colours
Array.prototype.random = function (length) {
  return this[Math.floor((Math.random()*length))];
}

var color = ['yellow', 'cyan', 'magenta', 'red', 'blue']
var rcolor = color.random(color.length);

//make sure that colours are randomised often
setInterval(function(){
        rcolor = color.random(color.length);
}, 300);

//create a twitter app and enter the apps details in here
var T = new Twit({
        consumer_key:   ''
,       consumer_secret:        ''
,       access_token:   ''
,       access_token_secret:    ''
})

//choose what words the twitter feed to use to pull the tweets
var stream = T.stream('statuses/filter', { track: ['#yagmanxbday', 'yagmanxbday', 'cats'] });

//display the tweets, put a break in between each one and apply the colours (I made the names stay green to keep emphasis on them)
        stream.on('tweet', function (tweet) {
                console.log(' ');
                console.log(tweet.text[rcolor] + ' (' + tweet.user.screen_name.green + ')');
        })