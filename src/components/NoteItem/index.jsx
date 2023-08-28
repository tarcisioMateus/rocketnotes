import { Tag } from '../Tag'

import { Container } from "./styles"

export function NoteItem({ title, tags, to, ...rest }) {
  return (
    <Container to={to} {...rest}>
      <h2>{title}</h2>
      <div id="tags">
        {tags && tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
      </div>
    </Container>
  )
}