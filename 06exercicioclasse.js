

class Carro {
    marca;
    modelo;
    ano;

    constructor( marca, modelo, ano ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        console.log("---  Detalhes do carro  ---");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`ano: ${this.ano} \n`);
    }
} // fim da classe

let carro1 = new Carro("Fiat", "Argo", 2026);
let carro2 = new Carro("Volkswagen", "Polo", 2025);
let carro3 = new Carro("Toyota", "Corola", 2024);

carro1.exibirDetalhes();
carro2.exibirDetalhes();
carro3.exibirDetalhes();


