function verificar(num1){
    let resultado;
    if ( num1 > 0 ){
    resultado = ('positivo')
    }else if ( num1 < 0 ){
        resultado = ('Igual a zero');
    }else {
        resultado = ("Negativo");
    }
    return resultado;
}
console.log(verificar(10));