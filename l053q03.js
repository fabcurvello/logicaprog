// Desenvolver um programa que apresente os resultados 
// de uma tabuada de um número qualquer informado
// pelo usuário.

let n;
console.log("Informe um número para ser exibida a tabuada:");
n = 6;
console.log(`Número informado: ${n}`);

for ( let cont = 0 ; cont <= 10 ; cont++ ) {
    console.log(`${n} x ${cont} = ${n * cont}`);
}