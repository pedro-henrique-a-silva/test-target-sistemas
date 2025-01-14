const readline = require('readline');

function isFibonacci(num) {
  if (num < 0) {
    return `${num} não pertence à sequência de Fibonacci.`;
  }

  let a = 0
  let b = 1
 
  while (a <= num) {
    if (a === num) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
    [a, b] = [b, a + b]; 
  }

  return `${num} não pertence à sequência de Fibonacci.`;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
  const num = Number(input);
  
  if (isNaN(num)) {
    console.log('Por favor, insira um número válido.');
  } else {
    console.log(isFibonacci(num));
  }

  rl.close();
});