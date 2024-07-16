let darkMode = true;
const buttonToggle = document.querySelector('#toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light')

  const mode = darkMode ? 'light' : 'dark'
  event.currentTarget
  .querySelector('span').textContext = `${mode} mode ativado!`

  darkMode = !darkMode
})