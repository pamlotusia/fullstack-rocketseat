const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class NotesController{
  async create(request, response){
    const { title , description, rating, tags} = request.body
    const { user_id } = request.params

    if(typeof rating !== "number"|| rating > 5 || rating < 0){
      throw new AppError("The rating must to be a number from 1 to 5.")
    }

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return{
        note_id,
        name, 
        user_id
      }
    })
    await knex("movie_tags").insert(tagsInsert)
    response.status(200).json({message: "Note recorded successfully."})
  }
}

module.exports = NotesController
