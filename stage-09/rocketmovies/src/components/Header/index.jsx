import { Container, Profile, Input } from './styles'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      {/* <label htmlFor="search"></label> */}
      <Input>
      <label htmlFor="search"></label>
      <input type="search" placeholder='Pesquisar pelo título'/>
      </Input>

      <Profile>
        <img src="https://github.com/pamlotusia.png" alt="foto do usuario" />

        <div>
          <p>Pamela Lima</p>
          <a href="#">sair</a>
        </div>
      </Profile>
    </Container>
  )
}
