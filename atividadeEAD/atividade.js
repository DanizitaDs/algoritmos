let informacoesDoDoador = []
function exibirMenu () {
    console.log("===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====");
    console.log('1. Cadastro Doador');
    console.log('2. Listar Doadores');
    console.log('3. Buscar doador por tipo sanguíneo');
    console.log('4. Buscar doador por data da última doação');
    console.log('5. Sair');
}
const readlineSync = require('readline-sync');
function main () {
    let encerrar = false;
    while (!encerrar) {
        exibirMenu()       
         let opcao = readlineSync.question('Digite a opção desejada: ');
        encerrar = escolha(opcao)
    }
}
main();
function escolha (opcao) {
    switch (opcao) {
        case '1':
            cadastrarDoador(informacoesDoDoador)
            break;
        case '2':
            listaDeDoadores(informacoesDoDoador)
            break;
        case '3':
            buscarTipoSanguineo()
            break
        case '4':
             buscarPorDataUltimaDoacao(informacoesDoDoador)
            break;
        case '5':
            console.log('Encerrando programa...')
            return true;
        default:
            console.log('Opção inválida')
    }
    return false;
}

/* 1. Cadastrar doador: essa opção permite cadastrar um novo doador no sistema. O programa deve solicitar o nome, a idade, o peso, o tipo sanguíneo e a data da última doação do doador. O sistema 
deve armazenar essas informações em um objeto e esse objeto em um array de doadores. */


function cadastrarDoador () {
    let nome = readlineSync.question('Digite o nome do Doador: ');
    let idade = Number(readlineSync.question('Digite a idade do Doador: '));
    let peso = Number(readlineSync.question('Digite o peso do Doador: '));
    let sangue = readlineSync.question('Digite o tipo sanguíneo do Doador: ');
    let doacao = Number(readlineSync.question('Digite a data da última doação do doador: '));
    informacoesDoDoador.push({nome: nome, idade: idade, peso: peso, tipoDeSangue: sangue, ultimaDoacao: doacao});
}

/*2. Listar doadores: essa opção lista todos os doadores cadastrados no sistema, mostrando suas informações
 completas. */
 function listaDeDoadores(doador){
    console.log(`--------------------` + '\n' + `LISTAGEM DE DOADORES: ` + '\n' + `--------------------`); 
    console.log(`NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO`)   
    console.log(`-----------------------------------------------------------------`)
    for (let i = 0; i < informacoesDoDoador.length; i++){
        console.log(`${doador[i].nome}     |  ${doador[i].idade}  |   ${doador[i].peso}  |  ${doador[i].sangue} |  ${doador[i].ultimaDoacao}`)
    }
    console.log(`-----------------------------------------------------------------`)
}

/*3. Buscar doador por tipo sanguíneo: essa opção permite buscar doadores pelo seu tipo sanguíneo. O programa deve 
solicitar o tipo sanguíneo desejado e listar todos os doadores com o mesmo tipo sanguíneo. */

function buscarTipoSanguineo(){
   let sangueDesejado = (readlineSync.question('Digite o tipo sanguíneo desejado: '));
    let doadoresEncontrados = informacoesDoDoador.find(doador => doador.sangue === sangueDesejado.toUpperCase());
    
    console.log(`--------------------`);
    console.log(` RESULTADO DE BUSCA: `);
    console.log(`--------------------`);
    if (doadoresEncontrados) {
        console.log("NOME             | IDADE | TIPO SANGUÍNEO | PESO | ÚLTIMA DOAÇÃO");
        console.log("-------------------------------------------------");
        console.log(`${doadoresEncontrados.nome}  | ${doadoresEncontrados.idade} |  ${doadoresEncontrados.sangue}  | ${doadoresEncontrados.peso}  | ${doadoresEncontrados.ultimaDoacao}`);
        console.log("-------------------------------------------------\n");
    } else {
        console.log("Nenhum doador encontrado com esse tipo sanguíneo.\n");
    }
}

/*4. Buscar doador por data da última doação: essa opção permite buscar doadores que fizeram a última doação antes 
de uma determinada data. O programa deve solicitar a data desejada e listar todos os doadores que
fizeram a última doação antes dessa data. */

function buscarPorDataUltimaDoacao(doadores) {
    let dataDesejada = readlineSync.question("Digite a data desejada (DD/MM/AAAA): ");
    
    console.log("--------------------------------");
    console.log(`RESULTADO DE BUSCA:`);
    console.log("--------------------------------");
    
    let doadoresEncontrados = [];
    for (let i = 0; i < doadores.length; i++) {
        if (doadores[i].ultimaDoacao < dataDesejada) {
            doadoresEncontrados.push(doadores[i]);
        }
    }
    
    if (doadoresEncontrados.length > 0) {
        console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO");
        console.log("-----------------------------------------------------------------");
        for (let i = 0; i < doadoresEncontrados.length; i++) {
            let doador = doadoresEncontrados[i];
            console.log(`${doador.nome}  | ${doador.idade} |  ${doador.sangue}  | ${doador.peso}  | ${doador.ultimaDoacao}`)
        }
        console.log("-----------------------------------------------------------------\n");
    } else {
        console.log('Nenhum doador encontrado que tenha doado antes de ${dataDesejada}.\n');
    }
}