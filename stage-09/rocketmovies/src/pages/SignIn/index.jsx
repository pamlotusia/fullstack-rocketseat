import { Button } from '../../components/Button'
import { Input } from "../../../../rocketnotes/src/components/Input";
import { Container, Form, Background} from "./styles";
import {FiMail, FiLock} from 'react-icons/fi'

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input placeholder='E-mail' type='email' icon={FiMail}/>
        <Input placeholder='Senha' type='password' icon={FiLock}/>

        <Button title='Entrar' className='light'/>
        <a href="">Criar conta</a>
      </Form>

      <Background/>
    </Container>
  )
}