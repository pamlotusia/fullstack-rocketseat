export const message = 'hello'

// podemos importar strings soltas, numeros, funções
export default 'algum dado'

// podemos exportar usando um export direto na declaração da variavel ou depois
function double(number){
  return number*2
}
export {double} //para exportar depois é necessario as {}

export function greeting(name){
  return `I miss you, ${name}`
}

