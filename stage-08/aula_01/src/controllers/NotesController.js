const knex = require('../database/knex')

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body
    const { user_id } = request.params

    const [notes_id] = await knex('notes').insert({
      title,
      description,
      user_id
    })

    const linksInsert = links.map(link => {
      return {
        notes_id,
        url: link
      }
    })

    await knex('links').insert(linksInsert)

    const tagsInsert = tags.map(name => {
      return {
        notes_id,
        name,
        user_id
      }
    })

    await knex('tags').insert(tagsInsert)

    response.json()
  }

  async show(request, response) {
    const { id } = request.params

    const note = await knex('notes').where({ id }).first()
    const tags = await knex('tags').where({ notes_id: id }).orderBy('name')
    const links = await knex('links')
      .where({ notes_id: id })
      .orderBy('created_at')

    return response.json({
      ...note,
      tags,
      links
    })
  }

  async delete(request, response) {
    const { id } = request.params

    await knex('notes').where({ id }).delete()

    response.json()
  }

  async index(request, response){
    const { user_id } = request.query

    const notes = await knex("notes").where({user_id}).orderBy("title")

    response.json(notes)
  }
}

module.exports = NotesController
