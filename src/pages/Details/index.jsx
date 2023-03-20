import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Section } from '../../components/Section'
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
      <Button title = 'Return'/>
    </Container>
  )
}