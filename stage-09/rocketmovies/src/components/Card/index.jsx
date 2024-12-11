import { Container } from './styles'
import { Tag } from '../../components/Tag'
import { RiStarSLine, RiStarSFill } from 'react-icons/ri'


export function Card({title, text, ...rest}) {
  return (
    <Container>
      <strong>{title}</strong>

      <div>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSLine />
      </div>

      <p>
        {text}
      </p>

      <div>
        <Tag title="Ficção Cientifica" />
        <Tag title="Drama" />
        <Tag title="Familia" />
      </div>
    </Container>
  )
}
