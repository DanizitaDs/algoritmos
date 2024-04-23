const readlineSync = require('readline-sync');

function exibirMenu () {
    console.log('Menu de opções')
    console.log('1. Naruto')
    console.log('2. Sakura')
    console.log('3. Sasuke')
    console.log('4. Sair')
}
exibirMenu()
function escolha () {
    switch (opcao) {
        case 'Naruto':
            console.log('Você escolheu: Naruto')
            break;
        case 'Sakura':
            console.log('Você escolheu: Sakura')
            break;
        case 'Sasuke':
            console.log('Você escolheu: Sasuke')
        case '4':
            console.log('Encerradno programa...')
            return true;
        default:
            console.log('Opção inválida')
    }
    return false;
}

// função principal

function main () {
    let encerrar = false;

    while (!encerrar) {
        let opcao = readline.question('Digite a opção desejada: ');
        encerrar = escolha(opcao)
    }
}

main();