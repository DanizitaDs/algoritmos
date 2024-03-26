function soma(a, b){
    return a + b
}
let resultado = soma (2,4)
console.log('o resultado é:', resultado)

// Expressão de função:

const calculadoraArea = function(altura, largura){
    const area = altura * largura
    return area
}
const areaCalculada =  calculadoraArea(3, 3)
console.log('resulatdo é:', areaCalculada)

// arrow function

const calculadoraArea1 = (altura, largura) => {
    const area = altura * largura
    return area
}

const areaCalculada2 = calculadoraArea1(4,5)
console.log('resultado é:', areaCalculada2)