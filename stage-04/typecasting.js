/*
    Type conversion (typecasting) vs Type Coersion

    * Alteração de um tipo de dado para outro tipo
*/

console.log(Number('9') + 5)

//Contar caracteres de uma palavra e um numero
let word = 'hello'
console.log(word.length)
let number = 123
console.log(number.length) //length não é uma propriedade do objeto Number, logo retornará undefield
console.log(String(number).length) //transformar em String para acessar a length é uma estratégia

//Transformar um número quebrado com 2 casas decimais e trocar por ponto e virgula
number = 563.8974
console.log(
  number.toFixed(2).replace('.', ',')
) /*aqui ele impoe que o numero terá apenas duas casas decimais apos o ponto
no replace() o primeiro argumento é o que será trocado e o segundo o substituto. Ao realizar a troca o que era Number passa a ser String, porque no Javascript as casas decimais são marcadas com ponto e não virgula, as virgulas pertencem as strings*/
console.log(typeof number.toFixed(2).replace('.', ','))
console.log(typeof number) // como a mudança de Number para String não foi guardada em nenhuma variavel, ao executar number novamente ele permanece sendo um Number

//Separando strings
let phrase = 'Eu quero viver o amor!'
let myArray = phrase.split(' ') //split alem de separar já transforma em array
console.log(myArray)
let phraseWithUnderscore = myArray.join('_') //join junta e define o separador entre cada elemento
console.log(phraseWithUnderscore)

//verificar se o texto contém a palavra amor
console.log(phrase.includes('Amor')) //includes é case sensitive, para encontrar precisa estar escrito exatamente igual
console.log(phrase.includes('amor'))

// Criando Array com construtor
let newArray = new Array(10)
console.log(newArray) //criou um array com 10 posições vazias

//manipulando arrays
console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo '
    }
  ][2]() //o elemento da posição 2 é uma função e como função podemos chamar ela com os parenteses e faze-la rodas
)
console.log(
  [
    'a',
    { name: 'maria' },
    function () {
      return 'alo '
    }
  ][1].name //o elemento da posição 1 é um objeto, podemos acessar suas propriedades e chaves
)
console.log(
  [
    'a',
    { name: 'maria' },
    function () {
      return 'alo '
    }
  ][0].length //o elemento da posição 0 é uma string, podemos acessar suas propriedades e metodos
)

// ou seja, chamando a posição do elemento voce acessa o elemento em si e depois consegue acessar as propriedades dele, seja iniciar a função, puxar os valores da chave, comprimento, etc.

// transformando uma cadeia de caracteres em array
let wordTest = 'manipulation'
let arrayTest = Array.from(wordTest)
console.log(arrayTest)

//manipulando arrays
let techs = ['html', 'css', 'js']

//adicionar um item no fim
techs.push('react')
//adicionar um item no inicio
techs.unshift('sql')
//remover um item no fim
techs.pop()
//remover um item no inicio
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1,3)) //o 1° arg do slide é o inicio e o 2° arg é o fim. Ou seja, ele aqui está cortando o array da posição 1 a posição 2.
//remover ou mais itens em qualquer posição do array
let testTechs = techs.splice(1, 2) //1° arg é a posição de inicio, o 2° arg é a quantidade de elementos que será retirados a partir dali
console.log(testTechs)
//encontrar a posição de um elemento
let index = techs.indexOf('html')
console.log(index)

// testando conhecimentos. Retire 'maça' da lista de frutas usando indexOf()
let listaDeFrutas = ['banana', 'pera', 'uva', 'maça', 'melancia', 'kiwi']
let indexMaca = listaDeFrutas.indexOf('maça')
console.log(indexMaca)
listaDeFrutas.splice(indexMaca, 1)// Aqui retorna o que foi retirado, no caso a maça
console.log(listaDeFrutas) //aqui retorna a lista atualizada