import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Button } from "./styles";

export function Header() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <Container>
      <Profile to='/profile'>
        <img
        src = 'https://github.com/tarcisioMateus.png'
        alt = "Picture from user"/>
        <div>
          <span>Welcome,</span>
          <strong>Tarcísio Mateus</strong>
        </div>
      </Profile>

      <Button 
        onClick={handleSignOut}>
        <RiShutDownLine/>
      </Button>
    </Container>
  )
}