// Desenvolver um programa que pergunte um número, e 
// apresente como resposta se o referido número é 
// par ou se é ímpar.

let num;

console.log("Informe um número: ");
num = 10;
console.log(`Valor inserido: ${num}`);

if ( num % 2 === 0 ) {
    console.log(`${num} é par!`);
} else {
    console.log(`${num} é ímpar!`);
}