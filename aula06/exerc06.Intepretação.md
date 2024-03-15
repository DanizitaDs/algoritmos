Exercícios de interpretação de código

Tente responder aos exercícios dessa seção sem executar o código. Se ficar muito difícil, você pode rodar no seu computador para analisar e pensar sobre o resultado.

Exercício 1

Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR ou programa.

const bool1 = verdadeiro const bool2 = falso const bool3 = !bool2

deixe resultado = bool1 && bool2 console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool2) console.log("c. ", resultado)

console.log("d. ", tipo de resultado)

RP:
const bool1 = true;
const bool2 = false; 
const bool3 = !bool2;


bool1 && bool2;
console.log("a. ", resultado);//false;

bool1 && bool2 && bool3;
console.log("b. ", resultado);//false;

!resultado && (bool1 || bool2); 
console.log("c. ", resultado); //true

console.log("d. ", typeof resultado);//boolean

Exercício 2

Seu colega se aproxima de você falando que o código dele não funciona como devia. Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

deixe primeiroNumero = "100" deixe segundoNumero = "43"

const soma = primeiroNumero + segundoNumero

console.log(soma)

RP: os valores estão em string, no caso deveriam estar em number para a soma sair certo como o "meu colega" quer.
  Alem de que os valores tem que estar em 'const' ou 'let' pra funcionar o comando.
Exercício 3

Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

RP:

const primeiroNumero = '43' number(primeiroNumero)
const segundoNumero = '100' number(segundoNumero)
const soma = primeiroNumero + segundoNumero

console.log(soma)