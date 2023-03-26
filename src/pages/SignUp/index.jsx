import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton'

import { Container, Form, Header, Img} from "./styles";

export function SignUp() {
  return (
    <Container>
      <Img/>

      <Form>
        <Header>
          <h1>Rocket Notes</h1>
        </Header>
        <p>Aplication to save and manage links</p>
        <h2>Create your account</h2>

        <Input type='text' placeholder='Name' label='Name' icon={FiUser}/>
        <Input type='email' placeholder='E-mail' label='E-mail' icon={FiMail}/>
        <Input type='password' placeholder='Password' label='Password' icon={FiLock}/>
        <Button title='Create'/>
        <Link to='/login'>Return to login</Link>
      </Form>

    </Container>
  )
}