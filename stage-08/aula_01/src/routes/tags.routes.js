// desentruturação -> *extraindo* o metodo Router do express ao inves de importar o modulo inteiro e todos os seus metodos
const { Router } = require('express')
const TagsController = require('../controllers/TagsController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

// cria um conjunto de rotas
const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/', ensureAuthenticated, tagsController.index)


// exporta todo o conjunto de rotas usersRoutes
module.exports = tagsRoutes
