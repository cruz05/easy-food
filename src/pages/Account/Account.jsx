import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Container } from './Account.styles'
import avatar from '../../assets/avatar.png'
import { Button } from '../../components/Button/Button'

export function Account() {
  const { user } = useContext(AuthContext)

  return (
    <Container>
      <div className='card'>
        <img
          src={user.photoURL || avatar}
          alt='User profile image.'
          referrerPolicy='no-referrer'
          onError={e => (e.currentTarget.src = avatar)}
        />
        <div className='card-info'>
          <p className='username'>{user.displayName}</p>
          <p className='email'>{user.email} </p>
          <Button to='/account'>Edit Profile</Button>
        </div>
      </div>

      <div className='options'>
        <Link to='/account/recipes'>My Recipes</Link>
        <Link to='/account/collections'>Collections</Link>
      </div>

      <Outlet />
    </Container>
  )
}
