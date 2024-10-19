const express = require('express')
const app = express()

// definindo para a aplicação o formato de dados que ela vai lidar -> JSON
app.use(express.json())

// METODO GET
app.get('/message/:id/:user', (request, response) => {
  //Route Param -> parametros obrigatorios
  // desestruturação
  const { id, user } = request.params
  response.send(`
    Mensagem ID: ${id}.
    Para o usuario :${user}`)
})

//sintaxe diferente entre Route Param e Query Param
// Query Param -> parametros não obrigatorios
// http://localhost:3333/users?page=2&limit=10
// servidor/rota?parametro=valor&parametro=valor
// sinal de ? para sinalizar query param, sinal de & para colocar mais de um na mesma rota
app.get('/users', (request, response) => {
  const { page, limit } = request.query
  response.send(`Pagina: ${page}. Limite: ${limit}`)
})

// METODO POST
app.post('/users', (request, response) => {
  const { name, email, password } = request.body
  /* devolve um tipo de html 
  response.send({name, email, password})
  */
  // devolve um json -> formato padrão utilizado nas APIs
  response.json({ name, email, password })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
