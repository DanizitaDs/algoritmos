const variavel1 = 50
const variavel2 = 35

//Igual: ===
//verifica se dois valores são iguais

console.log(variavel1 === (2*25)) //true
console.log(variavel1 === 50)//true
console.log(variavel1 === variavel2)//false

//diferentes: !===
//verifica se dois valores são diferentes

console.log(variavel1 !== variavel2)

//Maior >
//verifica se o valor da esquerda é maior que o valor da direita

console.log(variavel1 > variavel2) //true
console.log(variavel2 > variavel1) //false

//Maior ou Igual: >=
//verifica se o valor da esquerda é maior ou igual que o da direita

console.log(variavel1 >= variavel2)//true
console.log(50 >= 35)//true
console.log(50 >= 50)//true
console.log(35 >= 50)//false

//Menor <
//verifica se o valor da esquerda é menor do que o valor da direita

console.log(variavel1 < variavel2)//false
console.log(23 < 90)//true

//Menor ou igual <=
//verifica se o valor da esquerda é menor ou igual ao da direita

console.log(variavel1 <= variavel2)//false
console.log(variavel1 <= 50)//true