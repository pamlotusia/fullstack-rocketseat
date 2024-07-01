/*    Dada uma listade pacientes, descubra o IMC de cada e 
      imprima

      "Paciente X possui o IMC de: Y"

      Onde X é o nome do paciente e Y é o IMC desse paciente

      Crie uma função para o cálculo de IML

      formula IMC: peso / (altura * altura)
*/

const patients = [
  {name: 'jorge', age: 25, weight: 85, height: 1.78},
  {name: 'matheus', age: 20, weight: 75, height: 1.90},
  {name: 'vitor', age: 24, weight: 68, height: 1.60},
]

for(let patient of patients){
  let imc = patient.weight / (patient.height * patient.height)
  console.log(`Paciente ${patient.name} possui o IMC de: ${imc.toFixed(2)}`)
}
