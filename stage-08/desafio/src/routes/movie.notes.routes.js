const { Router } = require("express")
const NotesController = require('../controllers/MovieNotesController')

const notesMovie = Router()

const notesController = new NotesController()

notesMovie.post("/:user_id", notesController.create)
// notesMovie.get("/:id", notesController.show)

module.exports = notesMovie