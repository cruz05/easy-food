import { Link, Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Container } from './Layout.styles'

export function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>EasyFood</p>
        <div className='links'>
          <Link to='#'>Newsletter</Link>
          <Link to='#'>About Us</Link>
          <Link to='#'>Suscribe</Link>
          <Link to='#'>Terms Of Use</Link>
        </div>
      </footer>
    </Container>
  )
}
