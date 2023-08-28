import { useState, useEffect } from 'react'
import { api } from '../../services'

import { RiSearchLine } from 'react-icons/ri'
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Input } from '../../components/Input'
import { Section} from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'

import { Container, Brand, Menu, Search, Content, New} from './styles'

export function Home() {
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  function handleSelectedTag(tagName) {
    if (tagName == 'all') return setSelectedTags([])

    const alreadySelected = selectedTags.includes(tagName)
    if (alreadySelected) {
      setSelectedTags( prev => prev.filter(tag => tag !== tagName))
    } else {
      setSelectedTags( prev => [...prev, tagName])
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [selectedTags, search])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header/>
      <Menu>
        <li>
          <TextButton title='all' 
            onClick={() => handleSelectedTag('all')} isActive={selectedTags.length == 0}/>
        </li>
        {
          tags &&
          tags.map((tag, index) => {
            return <li key={index}>
                <TextButton title={tag}
                  onClick={() => handleSelectedTag(tag)} isActive={ selectedTags.includes(tag)}/>
              </li>
          })
        }
      </Menu>
      <Search>
        <Input placeholder='Search by title' icon={ RiSearchLine } label='Search by title'
          onChange={ e => setSearch(e.target.value)} value={search}/>
      </Search>
      <Content>
        <Section title='My notes'>
          {
            notes &&
            notes.map( note => {
              return <NoteItem key={note.id}
                to={`/details/${note.id}`} title={note.title} tags={note.tags}/>
            })
          }
        </Section>
      </Content>
      <New to='/new'>
        <FiPlus/>
        <p>Create Note</p>
      </New>
    </Container>
  )
}