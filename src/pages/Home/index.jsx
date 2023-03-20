import { RiSearchLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section} from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'

import { Container, Brand, Menu, Search, Content, New} from './styles'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header/>
      <Menu>
        <li></li>
      </Menu>
      <Search>
        <Input placeholder='Search by title' icon={ RiSearchLine } lable='Search by title'/>
      </Search>
      <Content>
        <Section title='My notes'>
          <NoteItem title='Middleware' tags={[{id: 1, title: 'express'}, {id: 2, title: 'node.js'}]}/>
          <NoteItem title='Middleware' tags={[{id: 1, title: 'express'}, {id: 2, title: 'node.js'}]}/>
        </Section>
      </Content>
      <New></New>
    </Container>
  )
}