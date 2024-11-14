class UserController{
  create(request, response){
    const { name, email, password} = request.body

    return response.json()
  }
}

module.exports = UserController;