/* solicite 2 numeros, faça a soma deles e apresente o resultado final ao usuario */

let numberOne = Number(prompt('digite o primeiro numero: '))
let numberTwo = Number(prompt('digite o segundo numero: '))

function sum(n1, n2){
  return n1 + n2
}

alert(`A soma dos numeros é : ${sum(numberOne, numberTwo)}`)