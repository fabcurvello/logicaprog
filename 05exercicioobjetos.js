// Crie um array com 3 produtos
let produtos = [
    {nome: "Notebook", preco: 2800.00},
    {nome: "Mouse", preco: 75.00},
    {nome: "Teclado", preco: 128.00}
];

//Acesse o primeiro e o último produto
console.log(`Primeiro produto: ${produtos[0].nome}`);
console.log(`Último produto: ${produtos[2].nome}`);

//Percorra a lista com for...of
for( let produto of produtos ) {
    console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
}

//Modifique o preço do segundo produto
produtos[1].preco = 89.99;
console.log(produtos);