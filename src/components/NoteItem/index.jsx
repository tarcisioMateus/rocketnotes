import { Tag } from '../Tag'

import { Container } from "./styles"

export function NoteItem({ title, tags }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div id="tags">
        {tags && tags.map(tag => <Tag key={tag.id} title={tag.title}/>)}
      </div>
    </Container>
  )
}