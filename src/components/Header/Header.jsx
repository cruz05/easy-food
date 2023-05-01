import { Link } from 'react-router-dom'
import { StyledHeader } from './Header.styles'

export function Header() {
  return (
    <StyledHeader>
      <img src='' alt='Logo' />
      <Link to='/'>
        <h1>EasyFood</h1>
      </Link>
      <nav>
        <Link className='btn-login' to='/login'>
          Sign in
        </Link>
        <Link className='btn-register' to='/register'>
          Register
        </Link>
      </nav>
    </StyledHeader>
  )
}
