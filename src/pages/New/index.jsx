import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { Item } from '../../components/Item'
import { Button } from '../../components/Button'

import { Container, Content, Form } from './styles'

export function New() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>

          <header>
            <h1>Create Note</h1>
            <Link to='/'>return</Link>
          </header>

          <Form>
            <Input placeholder='Title' label='Title'/>
            <TextArea placeholder='Details' label='Details'/>
            <Section title='Links'>
              <div id="links">
                <Item value='https://www.rocketseat.com.br/'/>
                <Item placeholder='New link' isNew/>
              </div>
            </Section>
            <Section title='Tags'>
              <div id="tags">
                <Item value='React'/>
                <Item placeholder='New tag' isNew/>
              </div>
            </Section>
            <Button title='Save'/>
          </Form>

        </Content>
      </main>

    </Container>
  )
}