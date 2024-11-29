const { Router } = require("express")
// chamando conjunto de rotas de users
const usersRouter = require("./users.routes")
const notesRouter = require("./movie.notes.routes")
const tagsRouter = require('./movies.tags.routes')
// iniciando o Router
const routes = Router()

// associando o grupo de rotas ao endereço dele
routes.use("/users", usersRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)

module.exports = routes;