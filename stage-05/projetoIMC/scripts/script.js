import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notNumber } from './utils.js'

const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)

  if (notNumber(result)) {
    AlertError.open()
    return
  }
  AlertError.close()
  Modal.message.innerHTML = `Seu IMC é de ${result}`
  Modal.open()
}

