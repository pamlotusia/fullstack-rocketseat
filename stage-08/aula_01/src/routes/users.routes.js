// desentruturação -> *extraindo* o metodo Router do express ao inves de importar o modulo inteiro e todos os seus metodos
const { Router } = require('express')

const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

// cria um conjunto de rotas
const usersRoutes = Router()
const usersController = new UsersController()

// METODO POST
usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)

// exporta todo o conjunto de rotas usersRoutes
module.exports = usersRoutes
