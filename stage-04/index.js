// conhecendo variaveis e objetos
let age
console.log(age)
age = 25
console.log(age)
let nome = 'pamela'
let saudation = `hi, I'm ${nome}, and I'm ${age} years old`
console.log(saudation)

const animals = [
  'lion', 
  'monkey',
  {
    name: 'cat', 
    age: 3
  }
]
// acessar valores dentro do array
console.log(animals[0])
console.log(animals[2].name)