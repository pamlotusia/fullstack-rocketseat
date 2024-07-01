/*    Faça um programa que tenha um menu e apresente a seguinte mensagem:
      Olá usuario! Digite o número da opção desejada
      1. Cadastrar um item na lista
      2. Mostrar itens cadastrados
      3. Sair do programa

      O programa deverá capturar o numero digitado pelo usuario e
      mostrar os seguintes cenarios:
      1. caso o usuario digite 1, ele podera cadastrar um item em uma lista
      2. caso o usuario digite 2, ele poderá ver os itens cadastrados
      --se não houver nenhum item cadastrado, mostrar a mensagem:
      "Não existem itens cadastrados"
      3. caso o usuario digite 3, a aplicação deverá ser encerrada
*/
let options
let list = []

while(options != 3){
  
  options = Number(
    prompt(`Olá usuário, digite o numero da opção desejada
        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa`)
  )

  switch (options){
    case 1:
      let item = prompt('cadastrar item:')
      list.push(item)
      break
    case 2:
      if (list == '') {
        alert('Não existem itens cadastrados')
      } else {
        alert(list)
      }
      break
      case 3:
        alert('programa encerrado')
        break
      default:
        alert('Opção inválida. Tente novamente.')
  }
  
}

