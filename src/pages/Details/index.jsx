import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container } from './styles'

export function Details() {
  return (
    <Container>
      <Header/>
      <Section title = 'Helpful Links'>
        <a>dd</a>
      </Section>
      <Button title = 'Voltar'/>
    </Container>
  )
}