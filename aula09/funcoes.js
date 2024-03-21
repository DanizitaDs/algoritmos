//Aqui estou criando a função:

function calculaAreaRetangulo(altura,largura){
let area = altura * largura
console.log(`a area do retangulo é:`,area);

}

calculaAreaRetangulo(2,3)
calculaAreaRetangulo(3,4)
calculaAreaRetangulo(4,5)
calculaAreaRetangulo(5,6)

// Exercicio 1:

function olamundo(){
    console.log("ola mundo!")
}
olamundo()

// Exercicio 2:

function olapessoa(nome){
    console.log(`ola ${nome}!`)
}
olapessoa('dani')
olapessoa('duda')
olapessoa('jessica')

function media(nota1,nota2,nota3){
let mediaNota = (nota1 + nota2 + nota3) / 3
console.log('a media é:', mediaNota.toFixed(2) )
}

media(10,20,30)

// Exercicio 3:

function parImpar(num){
  if ( num % 2 === 0 ){
    console.log('par')
} else {
    console.log('impar')
   }
}
parImpar(10)
parImpar(15)
parImpar(20)
parImpar(25)

// Exercicio 4:


const readline = require(`readline`);

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function mediapar (num){
    if ( num % 2 === 0 ){
        console.log('numero é par')
    } else {
        console.log('numero é impar')
       }
    }

rl.question('Digite um numero: ', (num) => {
    mediapar(num)
    
    rl.close()
    })