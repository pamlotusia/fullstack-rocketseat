//Exercícios sobre o conteúdo trabalhado até agora.

//1. Declare um variável de nome weight
let weight

//2. Que tipo de dado é a variável acima?
console.log(typeof weight)
//3. Declare uma variável e atribua valores para cada um dos dados
let name = 'Pamela'
let age = 22
let stars = 35.6
let isSubscribed = true

//4. A variável student abaixo é de que tipo de dados?
let student = {}
console.log(typeof student)
//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3
student.name = name
student.age = age
student.stars = stars
student.isSubscribed = isSubscribed
student.weigth = 64.5
console.log(student)
//4.2 Mostre no console as seguintes mensagens /* <name> de idade <age> pesa <weight> pelos valores de cada objeto */

console.log(`${student.name} de idade ${student.age} pesa ${student.weigth}`)

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio
let students = []
//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
students.push(student)
//7. Coloque no console o valor da posição zero do array acima
console.log(students[0])

//8. Crie um novo student e coloque ele na posição do Array students
let student2 = {
  name: 'Marc',
  age: 28,
  stars: 25.6,
  isSubscribed: false,
  weigth: 89,
}

students.push(student2)
console.log(students)
//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou /* console.log(a) var a = 1 */
console.log(a) 
var a = 1




