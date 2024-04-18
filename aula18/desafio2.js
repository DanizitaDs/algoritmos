function comparação(){
    const filme1 ={
        nome: 'barbi',
        lançamento: 1920
    }
    const filme2={
        nome: 'ben 10',
        lançamento: 1988
    }

    console.log('O primeiro filme foi lançado antes do segundo? ', filme1.lançamento < filme2.lançamento)
    console.log('O primeiro filme foi lançado no mesmo ano do segundo? ', filme1.lançamento === filme2.lançamento)
}
comparação()