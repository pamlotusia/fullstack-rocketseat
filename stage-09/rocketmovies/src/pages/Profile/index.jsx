import { Container } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/"> <FiArrowLeft/> Voltar</a>
      </header>
      <Form>
        <Avatar>
        <img src="https://github.com/pamlotusia.png" alt="Foto do usuário" />

        <label htmlFor="avatar">
          <FiCamera/>
          <input type="file" id="avatar" />
        </label>
        </Avatar>

        <Input placeholder='Nome' type='text' icon={FiUser}/>
      </Form>
    </Container>
  )
}