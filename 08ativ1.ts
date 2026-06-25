/* Crie uma função chamada apresentar que exiba no console a
mensagem: "Bem-vindo ao curso de JavaScript!". 
Chame a função ao final. */

function apresentar(): void {
    console.log("Bem-vindo ao curso de JavaScript!");
}
apresentar();

/* Crie uma função chamada exibirData que exiba a data atual no
console usando new Date().toLocaleDateString().
Chame-a 3 vezes. */

function exibirData(): void {
    console.log(new Date().toLocaleDateString());
}
exibirData();
exibirData();
exibirData();