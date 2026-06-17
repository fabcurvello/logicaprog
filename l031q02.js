// 2) Elaborar um programa que pergunte o nome do usuário, 
// quatro valores inteiros e apresente 2 resultados:
// a) Resultado de suas adições
// b) Resultado de suas multiplicações
// Exibir, ao início, uma saudação ao usuário!

// declaração de variáveis
let nome ;
let num1, num2, num3, num4, soma, mult;

console.log("Informe o seu nome: ");
// leia(nome)
nome = "Rafael";

console.log("Informe o primero valor inteiro:");
num1 = 5;

console.log("Informe o segundo valor inteiro:");
num2 = 8;

console.log("Informe o terceiro valor inteiro:");
num3 = 10;

console.log("Informe o quarto valor inteiro:");
num4 = 12;

soma = num1 + num2 + num3 + num4;
console.log("A soma dos 4 valores inseridos é "+ soma);
console.log("SOMA: " + num1 + " + " + num2 + " + " + num3 + " + " + num4 + " = " + soma);

mult = num1 * num2 * num3 * num4;
console.log(`A multiplicação dos 4 valores inseridos é ${mult}`);
console.log(`MULTIPLICAÇÃO: ${num1} x ${num2} x ${num3} x ${num4} = ${mult}`);