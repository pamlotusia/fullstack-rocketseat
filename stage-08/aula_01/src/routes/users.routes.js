// desentruturação -> *extraindo* o metodo Router do express ao inves de importar o modulo inteiro e todos os seus metodos
const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')

const UsersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

// cria um conjunto de rotas
const usersRoutes = Router()
const usersController = new UsersController()
const userAvatarController = new UserAvatarController()
const upload = multer(uploadConfig.MULTER)

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update)

// exporta todo o conjunto de rotas usersRoutes
module.exports = usersRoutes
