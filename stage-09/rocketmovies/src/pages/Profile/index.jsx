import { Input } from '../../components/Input'
import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft /> Voltar
        </a>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/pamlotusia.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input type="text" icon={FiUser} placeholder="Nome" />
        <Input type="email" icon={FiMail} placeholder="E-mail" />
        <Input
          type="current-password"
          icon={FiLock}
          placeholder="Senha atual"
        />
        <Input type="new-password" icon={FiLock} placeholder="Nova senha" />
        <button>Salvar</button>
      </Form>
    </Container>
  )
}
