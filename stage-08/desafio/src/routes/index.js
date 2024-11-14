const { Router } = require("express")
// chamando conjunto de rotas de users
const usersRouter = require("./users.routes")
// iniciando o Router
const routes = Router()

// associando o grupo de rotas ao endereço dele
routes.use("/users", usersRouter)

module.exports = routes;