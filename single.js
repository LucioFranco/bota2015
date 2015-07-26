var pi = require('./src/pi');

pi.init();

pi.send(parseInt(process.argv[3], 10));
