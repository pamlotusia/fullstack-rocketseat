// desentruturação -> *extraindo* o metodo Router do express ao inves de importar o modulo inteiro e todos os seus metodos
const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

// cria um conjunto de rotas
const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)
notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.create)
notesRoutes.get('/', notesController.show)
notesRoutes.delete('/', notesController.delete)

// exporta todo o conjunto de rotas usersRoutes
module.exports = notesRoutes
