const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class NotesController{
  async create(request, response){
    const { title , description, rating, tags} = request.body
    const { user_id } = request.params

    if(typeof rating !== "number"|| rating > 5 || rating < 0){
      throw new AppError("Valor de avaliação precisa ser um número de 1 a 5")
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
    response.status(200).json({message: "Avaliação gravada com sucesso."})
  }
}

module.exports = NotesController
