// Desenvolver um programa que apresente os quadrados 
// dos números inteiros de 15 a 200.

let cont = 15;
let pot;

while ( cont <= 200 ) {
    pot = Math.pow(cont, 2); // cont ** 2
    console.log(`${cont} elevado ao quadrado = ${pot}` );
    cont = cont + 1;
}