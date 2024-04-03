// Definição do array de numeros 
const numeros = [1,2,3,4,5];
// numero que estamos procurando
const numeroProcurado = 9;
//função para verificar se um numero é igual ao numero procurado 
function encontrar (numero){
    return numero === numeroProcurado;
}
// Filtrando os numeros usando a função encontrar 
const numerosEncontrados = numeros.filter(encontrar);
/* é uma função de array em JavaScript que cria um novo array contendo apenas os elementos que passam em um determinado teste, especificado por uma função de callback. */
console.log(numerosEncontrados);// saida; [3] 