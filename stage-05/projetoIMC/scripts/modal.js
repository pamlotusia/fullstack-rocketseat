export const Modal = {
  message: document.querySelector('h2.title'),
  popup: document.querySelector('.modal-wrapper'),
  buttonClose: document.querySelector('button.close'),

  open() {
    Modal.popup.classList.add('open')
  },
  close() {
    Modal.popup.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event){
  console.log(event.key)
  if(event.key === 'Escape'){
    Modal.close()
  }
}