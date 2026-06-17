// Desenvolver um programa que pergunte um número e exiba a informação 
// de que ele é positivo, negativo ou nulo.

let num ;
console.log("Informe um número: ");
num = 0;
console.log(`Número informado: ${num}`);

if ( num > 0 ) {
    console.log(`${num} é positivo`);
} else if ( num < 0 ) {
    console.log(`${num} é negativo`);
} else {
    console.log(`${num} é nulo`);
}