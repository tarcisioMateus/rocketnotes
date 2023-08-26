import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Header, Img} from "./styles";

export function SignIn() {
  const { SignIn } = useAuth()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignIn() {
    await SignIn({ email, password})
  }

  return (
    <Container>
      
      <Form>
        <Header>
          <h1>Rocket Notes</h1>
        </Header>
        <p>Aplication to save and manage links</p>
        <h2>Login</h2>

        <Input type='email' placeholder='E-mail' label='E-mail' icon={FiMail}
          onChange={ e => setEmail(e.target.value)}/>
        <Input type='password' placeholder='Password' label='Password' icon={FiLock}
          onChange={ e => setPassword(e.target.value)}/>
        <Button title='Sign In'
          onClick={handleSignIn}/>
        <Link to='/'>Sign Up</Link>
      </Form>

      <Img/>
    </Container>
  )
}