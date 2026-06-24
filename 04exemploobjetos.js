
// declarando um objeto chamado aluno
let aluno = {
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

// Exemplo notação de Conchetes
let propriedade = "nome";

console.log(aluno[propriedade]); // João

// Também funciona diretamente
console.log(aluno["idade"]); // 20

// Declarando novo objeto
let produto = {
    nome: "Notebook",
    preco: 3000
};
console.log( produto );

//Modificando o preço do notebook
produto.preco = 2800;
console.log( produto );

//Adicionar uma nova propriedade (uma nova chave)
produto.estoque = 15;
console.log ( produto );
