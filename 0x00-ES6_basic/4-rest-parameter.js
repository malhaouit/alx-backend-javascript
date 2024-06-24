export default function returnHowManyArguments(...args) {
  let count = 0;

  // eslint-disable-next-line no-unused-vars
  for (const arg of args) {
    count += 1;
  }

  return count;
}
