const readline = require('readline');

function reverseString(str) {
  const reversed = [];
  for (let i = str.length - 1; i >=0; i = i - 1) {
    reversed.push(str[i]);
  }

  return reversed.join('');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma palavra e veja ela revertida: ', (input) => {

  console.log(reverseString(input));

  rl.close();
});