// Exercicio 1:

const readlineSync = require('readline-sync');

const nome = readlineSync.question('qual o seu nome? ');
const email = readlineSync.question('qual o seu email? ');

console.log('O e-mail ' + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome + '.');

// Exercicio 2:

// a)
const array = ['lasanha','batata','churrasco','banana','bergamota'];
console.log(array);
// b)
const primeiroItem = array[0]
const segundoItem = array[1]
const terceiroItem = array[2]
const quartoItem = array[3]
const quintoItem = array[4]

console.log(`essas são as minhas comidas favoritas: 
 ${primeiroItem} 
 ${segundoItem} 
 ${terceiroItem} 
 ${quartoItem} 
 ${quintoItem}`);

 // c)

const comida = readlineSync.question('Me fale uma comida? ');
array[2]= comida 

console.log('Nova lista: ' + array);

// Exercicio 3:

// a)
const listaDeTarefas = []

// b)
const tarefa1 = readlineSync.question('Me fale uma tarefa que precise fazer: ');
const tarefa2 = readlineSync.question('Me fale a segunda tarefa que precise fazer: ');
const tarefa3 = readlineSync.question('Me fale a terceira tarefa que precise fazer: ');

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);

// c)
console.log(listaDeTarefas);

// d)
const realizou = readlineSync.question('Me fale um indice da tarefa que voce ja terminou (0,1 ou 2): ');

// e)

listaDeTarefas.splice(realizou,1);

// f)

console.log(listaDeTarefas)