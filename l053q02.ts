// Desenvolver um programa que apresente o total da 
// soma de n números inteiros do número 1 até n, 
// onde n é um valor informado pelo usuário.

let n: number ;
let acum: number = 0;

console.log("Informe um número: ");
n = 7;
console.log(`Número inserido: ${n}`);

for (let cont: number = 1; cont <= n; cont ++ ) {
    acum = acum + cont;
}

console.log(`A soma dos valores de 1 a ${n} é ${acum}`);