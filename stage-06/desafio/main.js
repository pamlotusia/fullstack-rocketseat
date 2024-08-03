const links = document.querySelectorAll('a')
const pages = {
  '/': 'home.html',
  '/the-universe': 'universe.html',
  'exploration': 'exploration.html'
}

function changePage(event){
  event = event || window.event
  event.preventDefault()

  window.history.pushState()
}

function handle(){
  const {pathname} = window.location
  const routes = pages[pathname] || pages['/']
}


links.forEach((link)=> addEventListener('click', changePage))