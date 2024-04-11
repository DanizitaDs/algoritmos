const numeros = [14,67,89,15,23]
for (let numero of numeros){
    console.log(numero)
}

// Exercicios 

const arrayDePalavras = ['banana','laranja','abacaxi']

function espaço(arrayDePalavras){
    let mensagem = ''
    for (let palavra of arrayDePalavras){
        mensagem += palavra + ' '
    }
    console.log(mensagem)
}
espaço(arrayDePalavras)