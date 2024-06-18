console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
