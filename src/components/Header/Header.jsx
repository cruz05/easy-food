import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { StyledHeader } from './Header.styles'
import { Dropdown } from '../Dropdown/Dropdown'

export function Header() {
  const { user } = useContext(AuthContext)

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
        {user ? (
          <Dropdown />
        ) : (
          <>
            <NavLink className='btn-login' to='/login'>
              Sign in
            </NavLink>
            <NavLink className='btn-register' to='/register'>
              Register
            </NavLink>
          </>
        )}
      </nav>
    </StyledHeader>
  )
}
