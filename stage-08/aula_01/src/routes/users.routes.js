// desentruturação -> *extraindo* o metodo Router do express ao inves de importar o modulo inteiro e todos os seus metodos
const { Router } = require('express')
const UsersController = require("../controllers/UsersController")

const usersController = new UsersController()

// cria um conjunto de rotas
const usersRoutes = Router()

// METODO POST
usersRoutes.post('/', usersController.create)

// exporta todo o conjunto de rotas usersRoutes
module.exports = usersRoutes