
// declarando um objeto chamado aluno EM TYPESCRIPT
let aluno: { nome: string; idade: number; ativo: boolean} = { 
    nome: "João",
    idade: 20,
    ativo: true
};

console.log( aluno ); // exibe o objeto completo

console.log( `Nome do aluno: ${aluno.nome}`);
console.log( `Idade: ${aluno.idade}`);
if ( aluno.ativo ) {
    console.log ( "Situação: Ativo");
} else {
    console.log ( "Situação: Inativo");
}