const fs = require('fs');

const dataFile = fs.readFileSync('dados.json');

const data = JSON.parse(dataFile);

const dadosOrdenados = data.sort((a, b) => a.valor - b.valor);

const diaMenorFaturamento = dadosOrdenados[0];
const diaMaiorFaturamento = dadosOrdenados[dadosOrdenados.length - 1];

const mediaFaturamento = dadosOrdenados
  .filter(dado => dado.valor > 0)
  .reduce((acc, cur) => acc + cur.valor, 0) / dadosOrdenados.length;

console.log(`Maior faturamento: ${diaMaiorFaturamento.valor} no dia ${diaMaiorFaturamento.dia}`);
console.log(`Menor faturamento: ${diaMenorFaturamento.valor} no dia ${diaMenorFaturamento.dia}`);
console.log(`Média faturamento: ${mediaFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da media: ${dadosOrdenados.filter(dado => dado.valor > mediaFaturamento).length}`);