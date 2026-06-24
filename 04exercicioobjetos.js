
//exercício material 07 - página 14

// item 1
let aluno = {
    nome: "Ana Carolina",
    idade: 26,
    matriculado: true
};

// item 2
console.log( `Nome: ${aluno.nome}`);
console.log( `Idade: ${aluno.idade}`);
if ( aluno.matriculado ) {
    console.log ( "Situação: Matriculado");
} else { 
    console.log ( "Situação: Não está matriculado");
}

// item 3 - modificar a idade
aluno.idade = 23;
console.log( aluno );