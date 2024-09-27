export class Router {
  routes = {}

  add(routeName, link, className) {
    this.routes[routeName] = { page: link, bodyClass: className }
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)
    this.handle()
  }

  teste() {
    console.log(this.routes['/'])
  }

  handle() {
    //desestruturação de dados
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes['/']

    fetch(route.page)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
        document.body.className = route.bodyClass //ajusta a classe ao body para alterar a imagem de fundo
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
