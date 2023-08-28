import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { Item } from '../../components/Item'
import { Button } from '../../components/Button'

import { Container, Content, Form } from './styles'

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddTag() {
    if (!newTag) return
    setTags( prev => [ ...prev, newTag])
    setNewTag("")
  }
  function handleRemoveTag(deleted) {
    setTags( prev => prev.filter( tag => tag !== deleted))
  }

  function handleAddLink() {
    if (!newLink) return
    setLinks( prev => [ ...prev, newLink])
    setNewLink("")
  }
  function handleRemoveLink(deleted) {
    setLinks( prev => prev.filter( link => link !== deleted))
  }

  
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
            <Input placeholder='Title' label='Title'
              onChange={ e => setTitle(e.target.value)} value={title}/>
            <TextArea placeholder='Details' label='Details'
              onChange={ e => setDescription(e.target.value)} value={description}/>
            <Section title='Links'>
              <div id="links">
                {
                  links &&
                  links.map((link, index) => {
                    return <Item value={link} 
                      key={index} onClick={() => handleRemoveLink(link)}/>
                  })
                }
                <Item placeholder='New link' isNew value={newLink}
                  onClick={handleAddLink} onChange={ e => setNewLink(e.target.value)}/>
              </div>
            </Section>
            <Section title='Tags'>
              <div id="tags">
                {
                  tags &&
                  tags.map((tag, index) => {
                    return <Item value={tag} 
                      key={index} onClick={() => handleRemoveTag(tag)}/>
                  })
                }
                <Item placeholder='New tag' isNew value={newTag}
                  onClick={handleAddTag} onChange={ e => setNewTag(e.target.value)}/>
              </div>
            </Section>
            <Button title='Save'/>
          </Form>

        </Content>
      </main>

    </Container>
  )
}