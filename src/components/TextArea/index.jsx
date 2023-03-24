import { Container } from './styles'

export function TextArea({label, ...rest}) {
  return (
    <Container>
      <label htmlFor={label} className='sr-only'>{label}</label>
      <textarea {...rest} id={label}></textarea>
    </Container>
  )
} 