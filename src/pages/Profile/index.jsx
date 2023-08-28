import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
 
import { Container, Form, Picture } from './styles'

export function Profile () {
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  return (
    <Container>
      <header>
        <Link to='/'> <FiArrowLeft/> </Link>
      </header>

      <main>
        <Form>
          <Picture>
            <img
              src = 'https://github.com/tarcisioMateus.png'
              alt = "Picture from user"/>
            
            <label htmlFor='choose picture'>
              <FiCamera/>
              <input type='file' id='choose picture' className='sr-only'></input>
            </label>
          </Picture>

          <Input placeholder='Name' label='Name' icon={FiUser}
            onChange={ e => setName(e.target.value)} value={name}/>
          <Input type='email' placeholder='E-mail' label='E-mail' icon={FiMail}
            onChange={ e => setEmail(e.target.value)} value={email}/>
          <Input type='password' placeholder='Current Password' label='Current Password' icon={FiLock}
            onChange={ e => setCurrentPassword(e.target.value)}/>
          <Input type='password' placeholder='New Password' label='New Password' icon={FiLock}
            onChange={ e => setNewPassword(e.target.value)}/>
          <Button title='save'/>
        </Form>
      </main>
      
    </Container>
  )
}