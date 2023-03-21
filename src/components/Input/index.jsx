import { Container } from "./styles";

export function Input({ icon: Icon, lable, ...rest}) {
  return (
    <Container>
      <label htmlFor={lable} className='sr-only'>{lable}</label>
      { Icon && <Icon/>}
      <input {...rest} id={lable}/>
    </Container>
  )
}