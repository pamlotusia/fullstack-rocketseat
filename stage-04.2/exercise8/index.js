/*    Crie uma lista de pacientes

      Cada paciente deverá conter
      nome
      idade
      peso
      altura

      Escreva uma lista contendo o nome dos pacientes
*/

class Patient {
  constructor(name, age, weight, height){
    this.name = name,
    this.age = age,
    this.weight = weight,
    this.height = height;
  }
}

let person1 = new Patient('marcio', 35, 85, 1.72)
let person2 = new Patient('maria', 12, 53, 1.55)
let person3 = new Patient('marcelo', 23, 92, 1.90)
let list = [person1.name, person2.name, person3.name]
console.log(list)
