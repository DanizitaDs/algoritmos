// Exercicio 1:
 
// a)
function nome (){
    console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
}
nome()

function nome3 (){
    console.log("Eu sou Danielle, tenho 16 anos, moro sapucaia e sou estudante.")
}
nome3()

// b)



function nome2 (nome,idade,cidade,profissão){
  
    console.log("meu nome é", nome,", e tenho",idade,'anos, moro em', cidade, ', e sou',profissão)
}
nome2('Danielle',16,'sapucaia','estudante')

// 2- Exercicio: 

// a)

function soma(a, b){
    return a + b
}
let resultado2 = soma (2,4)
console.log('o resultado é:', resultado2)

// b)

function boolena(a, b){
    if ( a >= b ){
        console.log(true)
    } else {
        console.log(false)
       }
}
boolena(2,5)

// c)
function ParIm(num){
    if ( num % 2 === 0 ){
        console.log(true)
    } else {
        console.log(false)
       }
}
ParIm(4)

// d)

function letras(texto){
  console.log(texto.toLowerCase())
  console.log(texto.length)
}
letras('Chinelo')

// 3- Exercicios:

const readline = require(`readline`);

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
function soma(num1,num2){
    soma = num1 + num2
}
function multi(num1,num2){
    multi = num1 * num2
}
function resto(num1,num2){
    resto = num1 % num2
}
function divisao(num1,num2){
    divisao = num1 / num2
}
rl.question('Digite o primeiro numero: ', (numero1) => {
    rl.question('Digite o segundo numero:',(numero2) => {
        if (soma) {
            console.log('resultado:', Number(numero1) + Number(numero2))
          } else if (multi) {
            console.log('resultado:', Number(numero1) * Number(numero2))
          } else if (resto) {
            console.log('resultado:', Number(numero1) % Number(numero2))
          } else if (divisao) {
            console.log('resultado:', Number(numero1) / Number(numero2))
          } else {
            console.log('resultado nao encontrado')
          } 
      rl.close()
    });
  });