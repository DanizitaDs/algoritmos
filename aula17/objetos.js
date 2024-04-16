const professor = {
    nome: 'Danielle',
    idade: 16,
    tarefas: ['dar aula','responder duvidas'],
    contarPiada: function(){
        console.log('é pa ve ou pá come?')
    }
}
console.log(professor.nome,professor.idade) // primeira opção
console.log(professor['nome']) // segundo opção


const professor2 = {
    nome: 'vitor',
    idade: 27,
    email : 'profvitor@gmail.com'
}

professor2.nome = 'mika' // trocar o valor
professor2['email'] = 'profmika@gmail.com'

const filmeMeu = {
    nome: 'Turbo',
    direção: "David soren",
    anoDeLançamento: 2013,
    elenco: ['Ryan Reynolds', 'Samuel L. Jackson', 'Ísis Valverde'],
    jaVi: true
}

console.log(
    'nome do filme:' + filmeMeu.nome + '\n' + 
    'diretor do filme:' + filmeMeu.direção + '\n' +
    'ano de lançamento:' + filmeMeu['anoDeLançamento'] + `\n` +
    'elenco:' + filmeMeu['elenco'] + '\n' +
    'eu ja vi o filme?' + filmeMeu['jaVi'] + '\n' 
);

const pessoa = {
    nome: 'Danielle',
    idade: 16,
    genero: 'feminino',
    musica: 'funk'
}

console.log('o nome da pessoa é', pessoa.nome,',','ela tem', pessoa.idade,'anos e gosta muito de', pessoa.musica, '.')

const donoDoPet = {
    nome:"Wanda",
    pet:{
        nomeDoPet: 'Wandinha',
        raca: 'vira-lata',
        idade: 1
    }
}
console.log(donoDoPet.pet.nomeDoPet)