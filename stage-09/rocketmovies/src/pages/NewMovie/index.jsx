import { Container } from './styles'

export function NewMovie() {
  return (
    <Container>
      <Header />
      <Form>
        <header>
          <a href="/">
            <FiArrowLeft /> Voltar
          </a>
          <p>Novo filme</p>
        </header>
        <Input placeholder="Título" />
        <Input placeholder="Sua nota (de 0 a 5)" />
        <textarea placeholder="Observações"></textarea>
      </Form>

      <Section>
        <p>Marcadores</p>
        <div>
          <NoteItem value='tags'/>
          <NoteItem isNew placeholder='Novo marcador'/>
        </div>
      </Section>
      <Button title='Excluir filme' className='oposite'/>
      <Button title='Salvar alterações'/>
    </Container>
  )
}
