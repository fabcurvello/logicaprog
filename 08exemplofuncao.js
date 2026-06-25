//Material 08 (Modularização e Funções) - Página 06

// variável GLOBAL
let num;

function somar(a, b) {
    // resultado -> variável LOCAL
    let resultado = a + b;
    return resultado;
}

direcionador();

// exibindo imediatamente o valor retornado pela função
console.log( somar(5, 3));

// guardando o valor retornado em uma variável
num = somar(10, 20);
console.log( num );

somar(4, 5); // o retorno da função se perde.

// Função sem return (Função void)
function direcionador(){
    console.log("Siga em frente! Estude sempre!");
}
//chamando a função direcionador()
direcionador();
direcionador();

let texto = direcionador();
console.log( texto ); // variável não recebe retorno da função

function mensagem() {
    return "Coma menos carboidratos e mais proteínas!";
}

//chamando a função mensagem()
mensagem(); // perdi o retorno da função
console.log( mensagem() );

function tudao() {
    console.log("Início da função tudao()");
    direcionador(); //chamando a função direcionador
    let calc = somar(2, 3);
    console.log(`Resultado da soma: ${calc}`);
    let msg = mensagem();
    direcionador();
    console.log(`Mensagem do dia: ${msg}`);
    console.log("Fim da função tudao()");
}

tudao(); // chamando a função tudao()

let cont; // global
for ( cont = 0 ; cont <= 3 ; cont++ ) {
    console.log( cont );
}
console.log( cont ); // deu bom, pq é global
direcionador();

