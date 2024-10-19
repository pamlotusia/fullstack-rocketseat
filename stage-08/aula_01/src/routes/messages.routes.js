const {Router} = require("express")

//cria um conjunto de rotas
const messages = Router()

// METODO GET
//Route Param -> sinalizados por : -> parametros obrigatorios
messages.get('/:id/:user', (request, response) => {
  // desestruturação
  const { id, user } = request.params
  response.send(`
    Usuário: ${user} |
    ID: ${id}`)
})

//sintaxe diferente entre Route Param e Query Param
// Query Param -> parametros não obrigatorios
// http://localhost:3333/messages?page=2&limit=10
// servidor/rota?parametro=valor&parametro=valor
// sinal de ? para sinalizar query param, sinal de & para colocar mais de um na mesma rota
messages.get('/', (request, response) => {
  const { page, content } = request.query
  response.send(`Pagina: ${page} | Conteúdo: ${content}`)
})

module.exports = messages