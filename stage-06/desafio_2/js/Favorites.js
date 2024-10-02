// classe que contem a logica dos dados
// como os dados serão estruturados
export class Favorites{
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
    this.tbody = this.root.querySelector('table tbody')

  }

  load(){
    this.entries = [
      {
        login: 'pamlotusia',
        name: 'Pamela Lima',
        public_repos: '30',
        followers: '300'
      },
      {
        login: 'zedamanga',
        name: 'zeze',
        public_repos: '630',
        followers: '1000'
      }]
  }
  delete(user){
    const filteredEntries = this.entries.filter((entry)=> entry.login !== user.login)
    
  }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites{
  constructor(root){
    super(root)

    this.update()
  }

  update(){
  this.removeAllTr()

  this.entries.forEach((user) => {
    const row = this.createRow()

    row.querySelector('.user img').src = `https://github.com/${user.login}.png`
    row.querySelector('.user img').alt = `Foto de ${user.name}`
    row.querySelector('.user p').textContent = user.name
    row.querySelector('.user span').textContent = user.login
    row.querySelector('.repositories').textContent = user.public_repos
    row.querySelector('.followers').textContent = user.followers

    row.querySelector('.remove').onclick = () => {
      const isOk = confirm('Tem certeza que deseja deletar essa linha?')
      if(isOk){
        this.delete(user)
      }
    }

    this.tbody.append(row)
  })

  }

  createRow(){
    const tr = document.createElement("tr")

    tr.innerHTML = `
        <td class="user">
          <img src="https://github.com/pamlotusia.png" alt='Imagem de Pamela Lima'>
          <a href="https://github.com/pamlotusia" target="_blank">
            <p>Pamela Lima</p>
            <span>pamlotusia</span>
          </a>
        </td>
        <td class="repositories">30</td>
        <td class="followers">2</td>
        <td>
          <button class="remove">&times;</button>
        </td> `
    return tr
  }
  removeAllTr(){
    this.tbody.querySelectorAll('tr')
    .forEach((tr)=> {tr.remove()})
  }
  
}