

/*Uma pessoa pode estudar em uma faculdade se:

Tiver concluído o ensino médio
Tiver 18 anos ou mais
Não estiver cursando outra faculdade

Escreva um programa com estas variáveis e mostre em uma mensagem se a pessoa pode ou não estudar nesta faculdade.
*/
 
let ensinoMedio = true
let maiordeIdade = 18
let idade = 17 >= maiordeIdade
let cursando = false

if (idade && ensinoMedio && cursando){
    console.log('ele podera entrar para faculdade!!')}
 else {
    console.log('Infelizmente não podera entrar na faculdade.')
}

const numero = Number(("50"))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)