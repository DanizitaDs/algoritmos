// Funções dentro de objetos são chamadas de MÉTODOS!!

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

// Trocar Valor:

professor2.nome = 'mika' // trocar o valor
professor2['email'] = 'profmika@gmail.com'

const filmeMeu = {
    nome: 'Turbo',
    direção: "David soren",
    anoDeLançamento: 2013,
    elenco: ['Ryan Reynolds', 'Samuel L. Jackson', 'Ísis Valverde'],
    jaVi: true
}

// Atividade:

console.log(
    'nome do filme:' + filmeMeu.nome + '\n' + 
    'diretor do filme:' + filmeMeu.direção + '\n' +
    'ano de lançamento:' + filmeMeu['anoDeLançamento'] + `\n` +
    'elenco:' + filmeMeu['elenco'] + '\n' +
    'eu ja vi o filme?' + filmeMeu['jaVi'] + '\n' 
);

// Atividade:

const pessoa = {
    nome: 'Danielle',
    idade: 16,
    genero: 'feminino',
    musica: 'funk'
}

console.log('o nome da pessoa é', pessoa.nome,',','ela tem', pessoa.idade,'anos e gosta muito de', pessoa.musica, '.')

// Como acessar objetos que estão dentro de outros objeto:

const donoDoPet = {
    nome:"Wanda",
    pet:{
        nomeDoPet: 'Wandinha',
        raca: 'vira-lata',
        idade: 1
    }
}
console.log(donoDoPet.pet.nomeDoPet)

// Acessar array dentro de objeto:

const curso = {
nome: 'Noturno Frontend',
linguagens: ['JS','CSS','HTML']
};

console.log(curso.linguagens[0]);

// Array de objetos:

const professor1 = [
{nome: 'Andrei', modulo:1},
{nome: 'vitor',modulo: 2},
{nome: 'mina', modulo: 3}
]

console.log(professor1[1].nome) // Vitor

// Adicionar propriedades:

const barbi = {
    nome: 'barbi',
    linguagens: ['js','banana','gisele']
}
// notação de ponto:
barbi.numeroDeParticipantes = 27
console.log(barbi)



const filmeMeu2 = {
    nome: 'Turbo',
    direção: "David soren",
    anoDeLançamento: 2013,
    elenco: ['Ryan Reynolds', 'Samuel L. Jackson', 'Ísis Valverde'],
    jaVi: true
}
filmeMeu2.nomeDosPersonagens = ['Turbo','Chet','WhiPlash']

console.log(
    'Nome do dublador: ' + filmeMeu2.elenco[0] + ', Nome do personagem: ' + filmeMeu2.nomeDosPersonagens[0] + '\n' +
    'Nome do dublador: ' + filmeMeu2.elenco[1] + ', Nome do personagem: ' + filmeMeu2.nomeDosPersonagens[1] + '\n' +
    'Nome do dublador: ' + filmeMeu2.elenco[2] + ', Nome do personagem: ' + filmeMeu2.nomeDosPersonagens[2] + '\n' 
)
 filmeMeu2.elenco[0] = 'Xuxa'

 console.log(filmeMeu2)

 /* Srep
 copiamos o usuario e sobrescrevemos as propriedades nome e idade com novos valores:
*/
 
const usuario = {
nome: 'prof',
idade: 25,
email: 'prof@senacrs.com.br',
cidade: 'São paulo'
}

const novoUsuario = {
...usuario,
nome:'joão',
idade: 28    
}
console.log(novoUsuario)

// copiando arrays:

const listaDeNomes = ['mika','paula','vitor']

const copiaListaDeNomes = [...listaDeNomes]

console.log(copiaListaDeNomes) // ['mika','paula','vitor']  

