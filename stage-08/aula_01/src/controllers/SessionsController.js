const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const {compare} = require("bcryptjs")
const authConfig = require('../configs/auth')
const { sign } = require("jsonwebtoken")

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    const user = await knex('users').where({ email }).first()

    // valida se usuario existe.
    if(!user){
      throw new AppError("E-mail e/ou senha incorreta", 401)
    }

    const passwordMatched = await compare(password, user.password)

    // valida se a senha está correta.
    if(!passwordMatched){
      throw new AppError("E-mail e/ou senha incorreta", 401)
    }

    const {expiresIn, secret} = authConfig.jwt
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })
    
    return response.json({user, token})
  }
}

module.exports = SessionsController
