const readlineSync = require('readline-sync');


let personagemPessoal = []

function adicionarPersonagem(){
    let nomePersonagem = readlineSync.question('Digite o nome do novo personagem: ');
    let chakraDoPersonagem = Number(readlineSync.question('Digite o chakra do personagem: '));
    let habilidadeDoPersonagem = readlineSync.question('Digite a habilidade do personagem ');

    personagemPessoal.push({nome: nomePersonagem, chakra: chakraDoPersonagem,habilidades: [habilidadeDoPersonagem] });
}
adicionarPersonagem()
console.log()

// Crie uma função que permita aos aspirantes a ninja treinar seu chakra. Esta função deve aumentar o nível de chakra de um aspirante em um valor aleatório entre 10 e 20.


function aumentoChakra(ninja){
    let aumentarChakra = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    ninja.nivelChakra = aumentarChakra
    console.log(`${ninja.nome} treinou seu chakra e aumentou seu nivel em: ${aumentarChakra}`)
    
}

aumentoChakra(personagemPessoal)

// Crie uma função que permita aos aspirantes a ninja adicionar novas habilidades ninja ao seu arsenal. Eles devem ser capazes de adicionar habilidades ninja (strings) ao array de habilidades.

function adicionarHabilidades (ninja){
    let arsenal = readlineSync.question('Adicione uma habilidade: ');
 console.log(`Foi adicionado ao ${ninja.nome} á habilidade: ${ninja.habilidadesNinjas.push(arsenal)}`)
}
adicionarHabilidades()

// Simule a conclusão de missões ninja. Crie uma função que permita aos aspirantes a ninja concluir missões com sucesso. Isso deve aumentar o número de missões concluídas em 1 e recompensar com um aumento aleatório de chakra entre 5 e 15.

function missoes (){
    console.log('Missão concluida com sucesso')
    
    let aumentarChakra = Math.floor(Math.random() * (10 - 5 + 1)) + 10;
    ninja.nivelChakra = aumentarChakra
    console.log(`${ninja.nome} treinou seu chakra e aumentou seu nivel em: ${aumentarChakra}`)
}
missoes(ninja)