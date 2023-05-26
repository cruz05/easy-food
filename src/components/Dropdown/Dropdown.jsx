import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'
import { AuthContext } from '../../context/AuthContext'
import { Container } from './Dropdown.styles'

export const Dropdown = () => {
  const { user, logout } = useContext(AuthContext)
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()

  const handleClick = async e => {
    e.preventDefault()
    try {
      await logout()
      navigate(0)
      console.log('Sign out')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <span onClick={() => setModal(prev => !prev)}>
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt='Profile Image.'
            referrerPolicy='no-referrer'
          />
        ) : (
          <FaRegUser />
        )}
        <BiChevronDown />
      </span>

      {modal && (
        <ul className='dropdown'>
          <li>
            <Link to='/account'>My Profile</Link>
          </li>
          <li onClick={handleClick}>Log Out</li>
        </ul>
      )}
    </Container>
  )
}
