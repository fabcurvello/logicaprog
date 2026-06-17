// Desenvolver um programa que pergunte 4 notas escolares de 
// um aluno e exiba mensagem informando que o aluno foi 
// aprovado se a média escolar for maior ou igual a 5. 
// Se o aluno não foi aprovado, indicar uma mensagem informando 
// essa condição. Apresentar junto com a mensagem de aprovação 
// ou reprovação o valor da média obtida pelo aluno.

let nota1, nota2, nota3, nota4, media;

console.log("Informe a primeira nota: ");
nota1 = 8;
console.log(`Nota 1: ${nota1}`);

console.log("Informe a segunda nota: ");
nota2 = 2.5;
console.log(`Nota 2: ${nota2}`);

console.log("Informe a terceira nota: ");
nota3 = 5;
console.log(`Nota 3: ${nota3}`);

console.log("Informe a quarta nota: ");
nota4 = 1;
console.log(`Nota 4: ${nota4}`);

media = ( nota1 + nota2 + nota3 + nota4 ) / 4;

if ( media >= 5 ) {
    console.log(`Média: ${media.toFixed(1)} - Situação: APROVADO(A)`);
} else {
    console.log(`Média: ${media.toFixed(1)} - Situação: REPROVADO(A)`);
}

