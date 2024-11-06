// desentruturação -> *extraindo* o metodo Router do express ao inves de importar o modulo inteiro e todos os seus metodos
const { Router } = require('express')
const NotesController = require('../controllers/NotesController')

// cria um conjunto de rotas
const notesRoutes = Router()

const notesController = new NotesController()

// METODO POST
notesRoutes.get('/', notesController.index)
notesRoutes.post('/:user_id', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

// exporta todo o conjunto de rotas usersRoutes
module.exports = notesRoutes
