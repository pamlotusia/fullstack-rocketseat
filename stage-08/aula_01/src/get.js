/* Conteudo sobre o metodo get e como ele opera -> apenas para deixar salvo em algum lugar
 */
app.get("/message/:id/:user", (request, response)=>{
  //Route Param -> parametros obrigatorios
  // desestruturação
  const {id, user} = request.params
  response.send(`
    Mensagem ID: ${id}.
    Para o usuario :${user}`)
})

//sintaxe diferente entre Route Param e Query Param
// Query Param -> parametros não obrigatorios
// http://localhost:3333/users?page=2&limit=10
// servidor/rota?parametro=valor&parametro=valor
// sinal de ? para sinalizar query param, sinal de & para colocar mais de um na mesma rota
app.get("/users", (request, response)=> {
  const {page, limit} = request.query
  response.send(`Pagina: ${page}. Limite: ${limit}`)
})
