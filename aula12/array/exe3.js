const personagens = ['jojo','melody','barbi','badmi']

function personagensAleatorios(array){
    let resultado = Math.floor(Math.random()*array.lenght)
    return array [resultado];
}

let personagemEscolhido = personagensAleatorios(personagens)
console.log('voce  é:', personagemEscolhido)
