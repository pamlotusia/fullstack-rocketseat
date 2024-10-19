// desentruturação -> *extraindo* o metodo Router do express ao inves de importar o modulo inteiro e todos os seus metodos
const { Router } = require('express')

// cria um conjunto de rotas
const usersRoutes = Router()

// METODO POST
usersRoutes.post('/', (request, response) => {
  const { name, email, password } = request.body
  response.json({ name, email, password })
})

// exporta todo o conjunto de rotas usersRoutes
module.exports = usersRoutes