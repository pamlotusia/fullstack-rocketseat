// desentruturação -> *extraindo* o metodo Router do express ao inves de importar o modulo inteiro e todos os seus metodos
const { Router } = require('express')
const TagsController = require('../controllers/TagsController')

// cria um conjunto de rotas
const tagsRoutes = Router()

const tagsController = new TagsController()

// METODO POST
tagsRoutes.get('/:user_id', tagsController.index)


// exporta todo o conjunto de rotas usersRoutes
module.exports = tagsRoutes
