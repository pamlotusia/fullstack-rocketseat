/*  1- Sintaxe que entrou no JS no EcmaScript 6 (ES6)
    2- Disponibilizar qualquer tipo de dado entre arquivos
    3- Separar código em diversos arquivos
    4- Isolar escopo e código 
*/

/*
    1- No ES6 é necessario apenas a declaração de um script.js no arquivo html, adicionando um type="module" ele puxa todo os exports e imports
    <script type="module" src="module.js"></script>
 */

// Import e Export simples
import stringSolta, { message , double} from "./utils.js";

// É possivel renomear um ou mais dados que foram exportados
import {greeting as declaracao} from './utils.js'
import * as calculator from './math.js'

console.log(message)
//a importação de objetos default não necessitam de {} e nem ter um nome especifico, ele compreende qualquer um. Os outros precisam das {} e precisam ter o mesmo nome que declarados nos arquivos origInais
console.log(stringSolta)
console.log(double(6))

console.log(declaracao('pamela'))
console.log(calculator.multiply(5,10))




