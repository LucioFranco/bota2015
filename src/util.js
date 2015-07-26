var fuzzy = require('fuzzysearch');
var _ = require('lodash');

exports.linkClean = function (text) {
  return _.filter(text.split(' '), function (e) {
    return !fuzzy('http:', e);
  }).join(' ');
}

exports.keys = function () {
  require('dotenv').load();
  return {
      consumer_key : process.env.consumer_key,
      consumer_secret : process.env.consumer_secret,
      token : process.env.token,
      token_secret : process.env.token_secret
  }
}

exports.playTone = function (score) {
  
}
