console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const name = process.stdin.read().trim();

  console.log(`Your name is: ${name}`);

  process.stdin.end();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
