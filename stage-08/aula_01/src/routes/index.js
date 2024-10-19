const { Router} = require("express")

const usersRoutes = require("./users.routes")
const messagesRoutes = require("./messages.routes")

const routes = Router()
routes.use("/users", usersRoutes)
routes.use("/messages", messagesRoutes)

module.exports = routes;