var pi = require('./src/pi');


function run() {
  pi.send(parseInt(process.argv[2], 10));
  setTimeout(run(), 2000);
}

run();
