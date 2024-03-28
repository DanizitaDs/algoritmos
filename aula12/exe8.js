function menor(num1,num2){
let resultado;
if (num2 < num1){
    resultado = (num2)
}else if (num1 < num2){
    resultado = (num1)
}else {
    resultado = ('resultado não encontrado!')
}
    return resultado;
}

console.log(menor(10,3))