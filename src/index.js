var util = require('./util');
var stream = require('node-tweet-stream')(util.keys());
var Sediment = require('sediment');
var _ = require('lodash');

Sediment.initialize();

stream.on('tweet', function (tweet) {
  var sentiment = Sediment.analyze(util.linkClean(tweet.text));
  if (sentiment.score > 0) {
    console.log('score:', sentiment.score, _.round(sentiment.score * sentiment.comparative));
    //console.log('with tweet:', tweet.text);
  }
});

stream.track('denver');
stream.track('chicago');
stream.track('london');
stream.track('dc');
