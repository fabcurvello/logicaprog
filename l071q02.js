/*  Desenvolver um programa que pergunte cinco elementos de um vetor a. 
No final, apresente a soma de todos oselementos deste vetor. */

let a = [4, 10, 2, 0, -3];
let acum = 0;

for ( let cont = 0; cont < a.length; cont++ ){
    acum = acum + a[cont];
}

console.log(`A soma dos valores do vetor a é ${acum}`);
