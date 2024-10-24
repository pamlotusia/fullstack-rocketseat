const { hash } = require("bcryptjs")
const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");

class UsersController{
  /* Controllers contém até 5 metodos -> boa prática
   * index - GET para listar vários registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * delete - DELETE para remover um registro.
   */
  async create(request, response){
    const { name, email, password} = request.body

    const database = await sqliteConnection()
    const checkUsersExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUsersExists){
      throw new AppError("Este email já está em uso.")
    }

   const hashedPassword = await hash(password, 8)

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    )
    return response.status(201).json()
  }
}

module.exports = UsersController;