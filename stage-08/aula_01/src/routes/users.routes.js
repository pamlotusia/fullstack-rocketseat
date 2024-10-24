// desentruturação -> *extraindo* o metodo Router do express ao inves de importar o modulo inteiro e todos os seus metodos
const { Router } = require('express')
const UsersController = require('../controllers/UsersController')

// cria um conjunto de rotas
const usersRoutes = Router()

function myMiddleware(request, response, next) {
  console.log('Você passou pelo Middleware.')

  next()
}

const usersController = new UsersController()

// METODO POST
usersRoutes.post('/', myMiddleware, usersController.create)
usersRoutes.put('/:id', myMiddleware, usersController.update)

// exporta todo o conjunto de rotas usersRoutes
module.exports = usersRoutes
