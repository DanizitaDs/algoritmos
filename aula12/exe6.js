function maior(num1,num2,num3,num4,num5){
    let resultado;
    if (num1 > num2 &&  num1 > num3 && num1 > num4 && num1 > num5){
        resultado = ('o numero', num1, 'é o maior!');
    } else if (num2 > num1 &&  num2 > num3 && num2 > num4 && num2 > num5){
        resultado = ('o numero', num2, 'é o maior!');
    } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
        resultado = ('o numero', num3, 'é o maior!');
    } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
        resultado = ('o numero', num4, 'é o maior!');
    } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){
        resultado = ('o numero', num5, 'é o maior!');
    }else{
        resultado = ('numero não encontrado');
    }
        return resultado;
}
maior(1,4,30,9,20)