import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function New() {
  return (
    <Container>
      <Header/>
      <main>
        <header>
          <h1>Create Note</h1>
          <TextButton title='return'/>
        </header>
        <Form>
          <Input placeholder='Title' label='Title'/>
          <TextArea placeholder='Details' label='Details'/>
          <Section title='Links'></Section>
          <Section title='Tags'></Section>
          <Button title='Save'/>
        </Form>
      </main>
    </Container>
  )
}