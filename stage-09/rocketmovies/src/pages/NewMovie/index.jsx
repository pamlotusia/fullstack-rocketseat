import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { Container, Section, Form } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

export function NewMovie() {
  return (
    <Container>
      <Header />
      <main>
        <header>
          <a href="/">
            <FiArrowLeft /> Voltar
          </a>
          <p>Novo filme</p>
        </header>
        <Form>
          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <textarea placeholder="Observações"></textarea>
        </Form>

        <Section>
          <p>Marcadores</p>
          <div>
            <NoteItem value="tags" />
            <NoteItem isNew placeholder="Novo marcador" />
          </div>
        </Section>
        <div className="buttons">
          <Button title="Excluir filme" />
          <Button title="Salvar alterações"/>
        </div>
      </main>
    </Container>
  )
}
