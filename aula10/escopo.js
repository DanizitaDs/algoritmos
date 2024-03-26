let idade = 16   //escopo global

function funcao1(){
let idade = 15   //escopo local
console.log('mirela tem:', idade , 'anos')
}
funcao1()

const a = 1 //Declaração da variavel A no escopo global

function imprimeVariavel (){
const b = 2 // Declaração da variavel B no escopo local
    console.log('variavel a', a)
    console.log('variavel b', b)
}
imprimeVariavel()
console.log('variavel a', a)
console.log('variavel b', b)
//para o codigo dar certo é preciso que a ultima linha seja comentada pois ele esta procurando o B que esta dentro da função e bão funciona pois é um escopo local.