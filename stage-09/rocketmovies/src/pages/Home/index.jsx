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
          <p>Meus filmes</p>
          <button>
            <FiPlus /> Adicionar filme
          </button>
        </header>
        <div className='cards'>
        <Card title='Interestelar' text='kvmdlfknmv'/>
        <Card title='Interestelar' text='kvmdlfknmv'/>
        <Card title='Interestelar' text='kvmdlfknmv'/>
        <Card title='Interestelar' text='kvmdlfknmv'/>
        <Card title='Interestelar' text='kvmdlfknmv'/>
        <Card title='Interestelar' text='kvmdlfknmv'/>

        </div>

      </Section>
    </Container>
  )
}
