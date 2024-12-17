import { Container } from './styles'

export function Button({ title , className}) {
  return <Container className={className} >{title} </Container>
}
