// Fazer um algoritmo que efetue o cálculo do valor de uma 
// prestação em atraso, utilizando a fórmula 
// prestação = valor + (valor x (taxa : 100) x tempo em dias).

let valor, taxa, tDias, prestacao;

console.log("Informe o valor da prestação: ");
valor = 200;
console.log(`Valor informado: R$ ${valor.toFixed(2)}`);

console.log("Informe o valor da taxa de juros: ");
taxa = 2;
console.log(`Taxa informada: ${taxa}%`);

console.log("Informe o total de dias de atraso: ");
tDias = 10;
console.log(`Total de dias informado:  ${tDias}`);

// prestação = valor + (valor x (taxa : 100) x tempo em dias).
prestacao = valor + (valor * (taxa / 100) * tDias);

console.log(`O valor da prestação em atraso é de R$ ${prestacao.toFixed(2)}`);