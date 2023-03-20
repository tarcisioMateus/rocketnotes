import { Header } from '../../components/Header'

import { Container, Brand, Menu, Search, Content, New} from './styles'

export function Home() {
  return (
    <Container>
      <Brand/>
      <Header/>
      <Menu></Menu>
      <Search></Search>
      <Content></Content>
      <New></New>
    </Container>
  )
}