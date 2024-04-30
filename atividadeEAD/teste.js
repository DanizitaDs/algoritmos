let personagem = [{nome: 'danielle', idade: 16}]

function listaDeDoadores(ninja){
    console.log(`--------------------` + '\n' + `LISTAGEM DE DOADORES: ` + '\n' + `--------------------`); 
    console.log(`NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO`)   
    console.log(`-----------------------------------------------------------------`)
    for (let i = 0; i < personagem.length; i++){
        console.log(`${ninja[i].nome}     |  ${ninja[i].idade}  |   ${ninja[i].peso}  |  ${ninja[i].sangue} |  ${ninja[i].ultimaDoacao}`)
    }
    console.log(`-----------------------------------------------------------------`)
}
listaDeDoadores(personagem)

//let aumentarChakra = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
//ninja[descobrir].chakra += aumentarChakra;
//console.log(`${ninja[descobrir].nome} treinou seu chakra e aumentou seu nível em: ${ninja[descobrir].chakra}`)
//console.log(`${ninja[descobrir].nome} tem ao total de Chakra: ${ninja[descobrir].chakra}`)