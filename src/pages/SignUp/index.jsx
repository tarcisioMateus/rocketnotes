import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services'

import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Header, Img} from "./styles";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if( !name || !email || !password) return alert("fill in all fields!")

    api.post('/users', {name, email, password}).then(
      () => {
        alert('successfully registered user!')
        navigate('/')
      }
    ).catch( error => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to create account')
      }
    })
  }

  return (
    <Container>
      <Img/>

      <Form>
        <Header>
          <h1>Rocket Notes</h1>
        </Header>
        <p>Aplication to save and manage links</p>
        <h2>Create your account</h2>

        <Input type='text' placeholder='Name' label='Name' icon={FiUser}
          onChange={ e => setName(e.target.value)}/>
        <Input type='email' placeholder='E-mail' label='E-mail' icon={FiMail}
          onChange={ e => setEmail(e.target.value)}/>
        <Input type='password' placeholder='Password' label='Password' icon={FiLock}
          onChange={ e => setPassword(e.target.value)}/>
        <Button title='Create'
          onClick={handleSignUp}/>
        <Link to='/'>Return to login</Link>
      </Form>

    </Container>
  )
}