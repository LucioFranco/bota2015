var i2c = require('i2c');
var address = 0x04;
var wire = new i2c(address, {device: '/dev/i2c-1'});

exports.init = function () {
  wire.scan(function (err, data) {
    console.log(data);
  });
}

exports.send = function (score) {
  wire.writeByte(score, function (err) {
    console.log(err);
  });
}
