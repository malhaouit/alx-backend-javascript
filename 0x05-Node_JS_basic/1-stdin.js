console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name !== null) {
    console.log(`Your name is: ${name.trim()}`);
    process.stdin.end();
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
