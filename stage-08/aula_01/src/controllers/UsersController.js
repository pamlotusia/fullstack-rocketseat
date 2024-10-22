const AppError = require("../utils/AppError");

class UsersController{
  /* Controllers contém até 5 metodos -> boa prática
   * index - GET para listar vários registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * delete - DELETE para remover um registro.
   */
  create(request, response){
    const { name, email, password} = request.body

    if(!name){
      throw new AppError("O nome é obrigatório!")
    }    
    //adicionando status code 
    response.status(201).json({ name, email, password})
  }
}

module.exports = UsersController;