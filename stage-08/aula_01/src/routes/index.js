const { Router} = require("express")

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const messagesRouter = require("./messages.routes")

const routes = Router()
routes.use("/users", usersRouter)
routes.use("/notes", notesRouter)
routes.use("/messages", messagesRouter)

module.exports = routes;