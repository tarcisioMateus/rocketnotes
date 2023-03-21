import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton'

import { Container, Form, Header, Img} from "./styles";

export function SignIn() {
  return (
    <Container>
      
      <Form>
        <Header>
          <h1>Rocket Notes</h1>
        </Header>
        <p>Aplication to save and manage links</p>
        <h2>Login</h2>

        <Input type='email' placeholder='E-mail' label='E-mail' icon={FiMail}/>
        <Input type='password' placeholder='Password' label='Password' icon={FiLock}/>
        <Button title='Sign In'/>
        <TextButton title='Sign Up' isActive/>
      </Form>

      <Img/>
    </Container>
  )
}