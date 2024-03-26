//  Exercicio 1:
const notaTotal = function(nota1, nota2, nota3){
    const resultado = (nota1 + nota2 +nota3)/3
    return resultado
}
const resulatado =  notaTotal(10, 20,30)
console.log('A media é:', resulatado)

//  Exercicio 2:

const parImpar = (num) => {
    if ((num % 2) === 0 ){
        console.log('par')
    } else {
        console.log('impar')
       }
}

parImpar(67)
