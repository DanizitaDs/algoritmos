/*  Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um variaveis para receber a idade do usuário.
    
       
    b) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`  */


let usuario = 'dani'
let idadeDoUsuario = 16
let idadeParaDirigir = 18

console.log('qual a sua idade', usuario, "?", '- eu tenho', idadeDoUsuario , 'anos')
console.log(usuario, 'pode dirigir um automovel?', idadeParaDirigir <= idadeDoUsuario)

if (idadeParaDirigir <= idadeDoUsuario  ){
    console.log('ela podera dirigir um carro!!')}
 else {
    console.log('Ela não podera dirigir!! cuidado!')
}

/*Agora faça um programa que verifica que turno do dia um aluno estuda. Escolha entre M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else.
💡 Dica
⭐
Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem "Boa Tarde!"
Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

Se o usuário digitar "V", a saída deve ser:
"Boa Tarde!"  */

const turno1 = 'N'

if ( turno1 === 'N'){
    console.log('Boa noite!')}
    else if (turno1 === 'bom dia') {
          console.log('bom dia')}
    else {
    
    console.log('boa tarde')
}

/* Repita o exercício anterior, mas utilizando a estrutura de switch case agora.*/

switch (turno1){
    case 'N':
      console.log('Boa noite!')
         break
   case 'B':
          console.log('bom dia')
          break
      case 'bt':
          console.log('boa tarde')
          break
          default:
          console.log('tenha um dia ruim!!')
       break
  }

  /* Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que mostre qual o gênero de filme que vão assistir e o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme". */

  let precoMaximo = 10
  let genero = 'fantasia' 

  console.log('vamos ir ao cinema?')
  if (( genero === 'fantasia') && precoMaximo < 15 )
    console.log('Bom filme!')
    else {
    
    console.log('Escolha outro filme.')
}
  