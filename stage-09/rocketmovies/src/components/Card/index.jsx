import { Container } from './styles'
import { Tag } from '../../components/Tag'
import { RiStarSLine, RiStarSFill } from 'react-icons/ri'

export function Card({ title, text, tagName, ...rest }) {
  return (
    <Container>
      <h2>{title}</h2>

      <div>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSLine />
      </div>

      <p>{text}</p>

      <div>
        {tagName && Array.from(tagName).map((tag) => (
          <Tag title={tag} />
        ))}
      </div>
    </Container>
  )
}
