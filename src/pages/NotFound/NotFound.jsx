import { Link } from 'react-router-dom'
import { Container } from './NotFound.styles'

export function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <p>Sorry, we can&apos;t find that page.</p>
      <Link to='/'>Home</Link>
    </Container>
  )
}
