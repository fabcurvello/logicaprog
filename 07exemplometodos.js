
class Pessoa {
    nome;
    idade;

    //Método construtor (ajuda acriar os objetos)
    constructor( nome, idade ) {
        this.nome = nome;
        this.idade = idade;
    }

    //Método comum
    apresentar() {
        console.log(`Olá! meu nome é ${this.nome}!`);
    }

} // fim da classe Pessoa

// instanciando objeto usando o construtor
let pessoa1 = new Pessoa("Roberto", 33);

console.log( pessoa1 );

//chamado o método apresentar da classe Pessoa
pessoa1.apresentar();