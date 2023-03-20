import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

import { Container } from './styles'

export function Details() {
  return (
    <Container>
      <Header/>
      <TextButton title = 'Delete Note'/>
      <Section title = 'Helpful Links'>
        <a>dd</a>
      </Section>
      <Section title = 'Tags'>
        <div id="tags">
        <Tag title={'express'}/>
        <Tag title={'node.js'}/>
        </div>
      </Section>
      <Button title = 'Return'/>
    </Container>
  )
}