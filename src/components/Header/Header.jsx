import { Link, NavLink } from 'react-router-dom'
import { StyledHeader } from './Header.styles'

export function Header() {
  return (
    <StyledHeader>
      <Link to='/'>
        <p className='brand'>EasyFood</p>
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to='/recipes'>
          Recipes
        </NavLink>
        <NavLink className='btn-login' to='/login'>
          Sign in
        </NavLink>
        <NavLink className='btn-register' to='/register'>
          Register
        </NavLink>
      </nav>
    </StyledHeader>
  )
}
