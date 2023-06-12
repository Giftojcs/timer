const args = process.argv.slice(2);

const setAlarms = (time) => {
  if (isNaN(time) || time < 0) {
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
};

for (const arg of args) {
  const time = Number(arg);
  setAlarms(time);
}

