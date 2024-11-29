const AppError = require('../utils/AppError')
const knex = require('../database/knex')
const { hash, compare } = require('bcryptjs')

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body

    const checkUsersExists = await knex('users').where({ email }).first()

    if (checkUsersExists) {
      throw new AppError('This email is already in use.')
    }

    const hashedPassword = await hash(password, 8)

    await knex('users').insert({ name, email, password: hashedPassword })

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const { id } = request.params

    const user = await knex('users').where({ id }).first()

    if (!user) {
      throw new AppError('User not found.')
    }

    const userWithUpdatedEmail = await knex('users').where({ email }).first()

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('This email is already in use.')
    }

    const updatedUser ={
      name: name ?? user.name,
      email: email ?? user.email,
      updated_at: knex.fn.now()
    }

    if (password && !old_password) {
      throw new AppError('You must enter your old password to reset.')
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.')
      }

      updatedUser.password = await hash(password, 8)
    }

    await knex('users')
      .where({ id })
      .update(updatedUser)

    return response.json()
  }
}

module.exports = UserController
