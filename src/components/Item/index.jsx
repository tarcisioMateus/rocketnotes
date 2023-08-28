import { FiPlus } from 'react-icons/fi'
import { RiCloseLine } from 'react-icons/ri'

import { Container } from "./styles"

export function Item({isNew = false, onClick, ...rest}) {
  return (
    <Container $isnew = {isNew.toString()}>
      <input readOnly = {!isNew} {...rest}/>
      <button type='button' onClick = {onClick} >
        { isNew ? <FiPlus/> : <RiCloseLine/> }
      </button>
    </Container>
  )
}