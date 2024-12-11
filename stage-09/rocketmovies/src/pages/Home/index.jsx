import { Container, Section } from './styles'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />
      <Section>
        <header>
          <h2>Meus filmes</h2>
          <button>
            <FiPlus /> Adicionar filme
          </button>
        </header>
        <Card title='Interestelar' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quam,
        beatae ex omnis ipsam perspiciatis animi architecto, mollitia, hic
        itaque dignissimos rem. Error, ex quae. Magni deleniti minus magnam
        omnis?'/>

      </Section>
    </Container>
  )
}
