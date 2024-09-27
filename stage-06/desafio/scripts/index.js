import { Router } from "./router.js"

const links = document.querySelectorAll('a')
// const secondLinks = document.querySelectorAll('#app a')
// pre configuração para encontrar os arquivos - já que estão dentro de outras pastas
const preLink = '/stage-06/desafio/pages'

// nova instancia do objeto Router e que será usado a partir daqui
const router = new Router()

//criando/adicionando as rotas para garantir mais flexibilidade e manutenção mais simples
router.add('/', `${preLink}/home.html`,'home')
router.add('/the-universe', `${preLink}/universe.html`, 'universe')
router.add('/exploration', `${preLink}/exploration.html`,'exploration')

//para já começar a renderizando a home atraves do js
router.handle()

window.onpopstate = () => router.handle()

//adiciona funcionalidade a todos os links
links.forEach(link => link.addEventListener('click', event => router.route(event)))
// secondLinks.forEach(link => link.addEventListener('click', event => router.route(event)))
window.route = () => router.route()
