import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services' 
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Button } from "./styles";

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const [avatar, setAvatar] = useState( user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder)

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <Container>
      <Profile to='/profile'>
        <img
        src = {avatar}
        alt = "Picture from user"/>
        <div>
          <span>Welcome,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Button 
        onClick={handleSignOut}>
        <RiShutDownLine/>
      </Button>
    </Container>
  )
}