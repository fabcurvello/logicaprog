/* Crie 2 vetores chamados nome e profissao, cada um com 5 
elementos. Pergunte ao usuário o nome e a profissão
de 5 pessoas e preencha estes vetores. Ao final exiba um 
relatório apontando o nome e a profissão de cada uma
das 5 pessoas cadastradas.  */

let nomes = ["Carla", "Robson", "Aline", "José", "Fátima"];
let profissoes = ["Professora", "Vendedor", "Arquiteta", "Engenheiro", "Costureira"];

console.log("--- RELATÓRIO DE NOMES E PROFISSÕES ---");

for (let cont = 0; cont < nomes.length; cont++) {
    console.log(`Nome: ${nomes[cont]} - Profissão: ${profissoes[cont]}`);
}