const { Router } = require("express")
const TagsController = require("../controllers/MovieTagsController")

const tagsRouter = Router()

const tagsController = new TagsController()

tagsRouter.get("/:user_id", tagsController.index)

module.exports = tagsRouter