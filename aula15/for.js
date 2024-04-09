/*let i = 0
while (i < 10){
    console.log(i)
    i++
}
for (let i = 0; i < 10; i++) {
    console.log(i)
}
*/
/*
const numeros = [14,67,89,15,23,88]
for ( let i = 0; i < numeros.length; i++){
    const elemento = numeros[i]
    console.log(elemento)
}
*/
let maior = 0
let array = [1,10,3,4,5]
function oMaior(num) { 
    for (let i = 0; i < num.length ; i++){
        if (num[i] > maior){
            maior = array[i]
        }
    }
    return maior
}

oMaior(array)
console.log(maior)