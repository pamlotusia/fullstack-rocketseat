function createPhrases() {
  console.log('hello')
  return 1
}
let teste = createPhrases()
if (teste == 1) {
  console.log('foi')
}

// function expression/anonymous
const sum = function (n1, n2) {
  return n1 + n2
}

sum(1, 2)

let number1 = 10
let number2 = 20
console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma deles é ${sum(number1, number2)}`)

//function scope
let subject = 'make a video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(createThink(subject))
console.log(subject)

//arrow function
let sayMyName = () => {
  console.log('Pam')
}

sayMyName()

//callback function
//as callback functions são funções chamadas dentro de outras funções. Elas são como qualquer outra função, basta defini-las como parametro e chama-las dentro da função desejada
function sayMyAge(age) {
  console.log('antes de executar a callback')
  age()
  console.log('depois de executar a callback')
}

sayMyAge(() => {
  console.log('estou em uma callback')
})

/*
    function constructor
    * para as function constructors a primeira letra deve ser maiuscula, por uma questao de semantica
    * expressão new para instanciar um novo objeto
    * this keyword
*/
function Person(name, age, isWalking) {
  this.name = name
  this.age = age
  this.isWalking = isWalking
  this.walk = function () {
    if (isWalking) {
      return 'andando'
    } else {
      return 'parado'
    }
  }
}
const pam = new Person('pamela', 22, true)
console.log(pam)
console.log(pam.walk())
