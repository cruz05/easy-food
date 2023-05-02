import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Container } from './Layout.styles'

export function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
