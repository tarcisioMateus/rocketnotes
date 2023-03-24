import { FiPlus } from 'react-icons/fi'
import { RiCloseLine } from 'react-icons/ri'

import { Container } from "./styles"

export function Item({isNew = false, ...rest}) {
  return (
    <Container isNew = {isNew}>
      <input readOnly = {!isNew} {...rest}/>
      <button type='button'>
        { isNew ? <FiPlus/> : <RiCloseLine/> }
      </button>
    </Container>
  )
}