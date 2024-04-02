// Arrays nada mais são do que listas de elementos.
//          começa como:     0,       1,       2
const listaDeCompras = ['batata','alface','queijo'];
const listaDeNumerosMega = [2,13,26,35,41,60];
const segundoItem = listaDeCompras[2]; //'queijo'
console.log(segundoItem);

//propriedade de lenght:
// ele conta o numero de itens

console.log(listaDeCompras.length); // 3

// Método includes(elemento)
// tem que colocar o nome corretamente

console.log(listaDeCompras.includes('batata')); // True
console.log(listaDeCompras.includes('nissin')); // False

// Método push (elemento)
// adiciona um ou mais elementos no final

const numeros = [1,2,3]
numeros.push(4)

console.log(numeros) // [1,2,3,4]
numeros.push(5,6,7)
console.log(numeros)// [1,2,3,4,5,6,7]

// Método pop()
// Remove o ultimo elemento

numeros.pop()
console.log(numeros) // [1,2,3,4,5,6]

// Método splice
//  remove n elementos á partir da posição i do array

const letras = ['a','b','c','d','e','f','g','h']
// indice (i)    0   1   2   3   4   5   6   7

letras.splice(2,1)
//    letras = ['a','b','d','e','f','g','h']
// indice (i)    0   1   3   4   5   6   7

letras.splice(3,2) // letras = ['a','b','d','g','h']
console.log(letras)