const pessoa = {
    nome1: 'Danielle',
    idade: 16,
    genero: 'feminino',
    musica: 'funk'
}

function objeto (objeto2){    
    
    const nova = {...objeto2,
        listaDeComidasPrefe: ['banana','chocolate','chiclete'],
        amigo: {
            nome: 'arthur',
            idade: 15
        }
    }
   
    console.log('o nome da pessoa é: ', pessoa.nome1, 'e suas comidas preferidas são:', nova.listaDeComidasPrefe[0], ',',nova.listaDeComidasPrefe[1], ',', nova.listaDeComidasPrefe[2], 'e seu melhor amigo se chama ', nova.amigo.nome , 'e tem ', nova.amigo.idade , 'anos.')
}

objeto(pessoa)
