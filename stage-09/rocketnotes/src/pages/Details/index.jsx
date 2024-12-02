import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iure culpa illo harum, natus corrupti, voluptatem quo labore laboriosam, ratione quia dolores veritatis ab. Veritatis ipsum sint harum eligendi nobis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptate placeat, eveniet possimus, accusamus quasi laboriosam eos ipsam et nulla, accusantium molestias reiciendis iste numquam eius repudiandae nostrum rem veniam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro pariatur doloribus cupiditate, perspiciatis modi quis voluptatem quae et eum in? Hic quas velit reiciendis laboriosam debitis veritatis voluptas consequatur.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="nodejs"></Tag>
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
