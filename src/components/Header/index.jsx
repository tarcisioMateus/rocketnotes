import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Button } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
        src = 'https://github.com/tarcisioMateus.png'
        alt = "Picture from user"/>
        <div>
          <span>Welcome,</span>
          <strong>Tarcísio Mateus</strong>
        </div>
      </Profile>

      <Button>
        <RiShutDownLine/>
      </Button>
    </Container>
  )
}