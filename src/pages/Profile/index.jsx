import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
 
import { Container, Form, Picture } from './styles'

export function Profile () {
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

          <Input placeholder='Name' label='Name' icon={FiUser}/>
          <Input type='email' placeholder='E-mail' label='E-mail' icon={FiMail}/>
          <Input type='password' placeholder='Current Password' label='Current Password' icon={FiLock}/>
          <Input type='password' placeholder='New Password' label='New Password' icon={FiLock}/>
          <Button title='save'/>
        </Form>
      </main>
      
    </Container>
  )
}