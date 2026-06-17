/* 
Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
menu de opções.
Código Opção
1 Incluir
2 Alterar
3 Excluir
4 Pesquisar
5 Sair
*/

let cod;
console.log("Menu de Opções:");
console.log("Código - Opção");
console.log("  1    - Incluir");
console.log("  2    - Alterar");
console.log("  3    - Excluir");
console.log("  4    - Pesquisar");
console.log("  5    - Sair");
console.log("Informe o código referente à ação desejada: ");
cod = 27;
console.log(`Código  inserido: ${cod}`);

switch ( cod ) {
    case 1:
        console.log("Você selecionou: 1 - Incluir");
        break;
    case 2:
        console.log("Você selecionou: 2 - Alterar");
        break;
    case 3:
        console.log("Você selecionou: 3 - Excluir");
        break;
    case 4:
        console.log("Você selecionou: 4 - Pesquisar");
        break;
    case 5:
        console.log("Você selecionou: 5 - Sair");
        break;
    default:
        console.log("ERRO: Código informado não é válido.");
        break;
}

l