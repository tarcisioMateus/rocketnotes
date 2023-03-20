import { Container } from "./styles";

export function Input({ icon: Icon, lable, ...rest}) {
  return (
    <Container>
      <label for={lable} className='sr-only'>{lable}</label>
      { Icon && <Icon/>}
      <input {...rest} id={lable}/>
    </Container>
  )
}