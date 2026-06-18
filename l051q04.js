// Desenvolver um programa que apresente o valor da soma dos 
// cem primeiros números inteiros 
// (1 + 2 + 3 + 4 + ... + 97 + 98 + 99 + 100)

let cont = 1;
let acum = 0; // acumulador.Começa valendo ZERO p contas de soma e subtração

while ( cont <= 100 ) {
    acum = acum + cont;
    cont = cont + 1;
}

console.log(`A soma dos valores de 1 a 100 é ${acum}`);