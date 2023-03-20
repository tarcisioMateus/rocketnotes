import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

import { Container, Links, Content } from './styles'

export function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <TextButton title = 'Delete Note'/>
          <h1>Gettings Started - React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Debitis eveniet ipsum iure deserunt modi, asperiores, 
            nihil perferendis inventore ea repudiandae in. 
            Eius ab nemo natus error iste sapiente expedita perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Debitis eveniet ipsum iure deserunt modi, asperiores, 
            nihil perferendis inventore ea repudiandae in. 
            Eius ab nemo natus error iste sapiente expedita perspiciatis.
          </p>
          <Section title = 'Links'>
            <Links>
              <li> <a href='#'>https://www.rocketseat.com.br/</a></li>
              <li> <a href='#'>https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>
          <Section title = 'Tags'>
            <div id="tags">
            <Tag title={'express'}/>
            <Tag title={'node.js'}/>
            </div>
          </Section>
          <Button title = 'Return'/>
        </Content>
      </main>
    </Container>
  )
}