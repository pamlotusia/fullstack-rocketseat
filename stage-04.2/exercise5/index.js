/*    Capture 10 itens para compor a lista de um supermercado
      apos isso, imprima-os, separando por virgula
*/

let shoppingList = []

for(let i = 1; i<= 10 ;i++){
  let item = prompt(`escreva um item para a lista de compras ${i}/10 :`)
  shoppingList.push(item)
}

alert(`Sua lista de compras é: ${shoppingList}`)