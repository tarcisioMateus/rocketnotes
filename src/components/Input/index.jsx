import { Container } from "./styles";

export function Input({ icon: Icon, label, ...rest}) {
  return (
    <Container>
      <label htmlFor={label} className='sr-only'>{label}</label>
      { Icon && <Icon/>}
      <input {...rest} id={label}/>
    </Container>
  )
}