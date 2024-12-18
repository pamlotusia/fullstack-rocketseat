import { Button } from '../../components/Button'
import { Input } from "../../../../rocketnotes/src/components/Input";
import { Container, Form, Background} from "./styles";
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input placeholder='Nome' type='email' icon={FiUser}/>
        <Input placeholder='E-mail' type='email' icon={FiMail}/>
        <Input placeholder='Senha' type='password' icon={FiLock}/>

        <Button title='Cadastrar' className='light'/>
        <a href=""> <FiArrowLeft />Voltar para o login</a>
      </Form>

      <Background/>
    </Container>
  )
}