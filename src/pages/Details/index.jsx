import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services'

import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

import { Container, Links, Content } from './styles'

export function Details() {
  const [data, setData] = useState({})

  const params = useParams()
  const navigate = useNavigate()

  async function handleDelete() {
    const itsOkay = window.confirm('Are u sure, you wanna delete this note ?')

    if (itsOkay) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    } 
  }

  useEffect(() => {
    async function fetchDetails() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchDetails()
  }, [])

  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <TextButton title = 'Delete Note' isActive
            onClick={handleDelete}/>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {
            data.links &&
            <Section title = 'Links'>
              <Links>
                {data.links.map( link => {
                  return <li key={String(link.id)}> 
                    <a href={link.url} target='_blank'>{link.url}</a>
                    </li>
                })}
              </Links>
            </Section>
          }
          {
            data.tags &&
            <Section title = 'Tags'>
              <div id="tags">
                {
                  data.tags.map( tag => {
                    return <Tag title={tag.name} key={String(tag.id)}/>
                  })
                }
              </div>
            </Section>
          }
          <Button title = 'Return'
            onClick={ () => navigate(-1)}/>
        </Content>
      </main>
    </Container>
  )
}