export class Router {
  routes = {}

  add(routeName, link){
    this.routes[routeName] = link
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, '', event.target.href)
    this.handle()
  }

  handle() {
    //desestruturação de dados
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes['/']
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
      this.addEventListeners()
    })
  }
  //para percorrer tambem links dentro das paginas e nao somente o index.hmtl inicial
  addEventListeners() {
    document.querySelectorAll('#app a').forEach(link => {
      link.addEventListener('click', event => this.route(event))
    })
  }

}
