const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const setTimer = (time) => {
  if (isNaN(time) || time < 1 || time > 9) {
    return;
  }

  console.log(`Setting timer for ${time} seconds...`);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
};

rl.on('line', (input) => {
  if (input === 'b') {
    process.stdout.write('\x07');
  } else if (Number.isInteger(Number(input))) {
    setTimer(Number(input));
  }
});

rl.on('SIGINT', () => {
  console.log('Thanks for using me, ciao!');
  rl.close();
});

