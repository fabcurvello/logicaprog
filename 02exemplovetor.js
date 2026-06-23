// ASSUNTO: VETORES

// vetor com nomes de alunos
let alunos = ["Ana", "Bruno", "Carlos", "Diana"];

// vetor com notas de alunos
let notas = [8.5 , 3, 8, 10];

console.log(alunos); //exibe os dados do vetor todo
console.log(alunos[3]); //Diana
console.log(alunos[0]); //Ana

alunos[2] = "Antônio";
console.log(alunos); //vetor todo (agora c Antônio)

//for para percorrer cada índice do vetor alunos
for (let cont = 0 ; cont < 4; cont++ ) {
    console.log( `Aluno(a) ${cont + 1} : ${alunos[cont]}` );
}

console.log( notas ); // exibindo todas as notas
console.log( notas[2] ); // 8

//for para percorrer cada índice dos dois vetores
for (let cont = 0 ; cont < 4; cont++ ) {
    console.log( `Nome: ${alunos[cont]} - Nota: ${notas[cont]}`);
}

console.log(alunos.length); // Tamanho do vetor : 4

// exemplo for clássico
for (let cont = 0 ; cont < alunos.length; cont++ ) {
    console.log( `Aluno(a) ${cont + 1} : ${alunos[cont]}` );
}

// exemplo for of
for (let aluno of alunos) {
    console.log(`Nome: ${aluno}`);
}

// exemplo forEach
// aluno recebe o dado do vetor, indice recebe o indice do vetor
// estes parâmetros funcionam NESTA ORDEM. Não devem ser invertidos
alunos.forEach(function(aluno, indice){
    console.log(`índice: ${indice}, aluno: ${aluno}`);
});

// métodos push, unshift, pop e shift
// push - adiciona ao final do vetor
alunos.push("Raimundo");
console.log(alunos);

// pop - remove do final do vetor
alunos.pop();
console.log(alunos);

// unshift - adiciona ao início do vetor
alunos.unshift("Raimundo");
console.log(alunos);

// shift - remove do início do vetor
alunos.shift();
console.log(alunos);