import { Container, Section } from './styles'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { FiPlus } from 'react-icons/fi'
import { Tag } from '../../components/Tag'

export function Home() {
  return (
    <Container>
      <Header />
      <Section>
        <header>
          <p>Meus filmes</p>
          <button>
            <FiPlus /> Adicionar filme
          </button>
        </header>
        <div className="cards">
          <Card
            title="Interestelar"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, expedita officiis. Ducimus nobis quis recusandae, autem distinctio doloremque repudiandae eos, aperiam reiciendis facilis maxime rerum quas velit cumque, esse odit."
            tagName={['Ficção cientifica', 'Drama', 'Familia']}
          />
          <Card
            title="Tár"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, expedita officiis. Ducimus nobis quis recusandae, autem distinctio doloremque repudiandae eos, aperiam reiciendis facilis maxime rerum quas velit cumque, esse odit."
          />
        </div>
      </Section>
    </Container>
  )
}
