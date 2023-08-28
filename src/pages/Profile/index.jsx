import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services' 
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
 
import { Container, Form, Picture } from './styles'

export function Profile () {
  const { user, updateUser } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const [avatar, setAvatar] = useState( user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate () {
    const update = {
      name, email, currentPassword, newPassword
    }

    const newUser =  Object.assign(user, update)
    await updateUser({ user: newUser, avatarFile })
  }

  function handleUploadAvatarFile(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const avatarView = URL.createObjectURL(file)
    setAvatar(avatarView)
  }

  return (
    <Container>
      <header>
        <Link to='/'> <FiArrowLeft/> </Link>
      </header>

      <main>
        <Form>
          <Picture>
            <img
              src = {avatar}
              alt = "Picture from user"/>
            
            <label htmlFor='choose picture'>
              <FiCamera/>
              <input type='file' id='choose picture' className='sr-only'
                onChange={ event => handleUploadAvatarFile(event)}></input>
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
          <Button title='save'
            onClick={handleUpdate}/>
        </Form>
      </main>
      
    </Container>
  )
}