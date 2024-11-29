const { Router } = require("express")
const NotesController = require('../controllers/MovieNotesController')

const notesMovie = Router()

const notesController = new NotesController()

notesMovie.post("/:user_id", notesController.create)

module.exports = notesMovie