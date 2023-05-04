import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { Container } from './Form.styles'
import { AuthContext } from '../../context/AuthContext.jsx'

export function Form() {
  const { googleSignIn } = useContext(AuthContext)
  const handleClick = async () => {
    try {
      const result = await googleSignIn()
      console.log(result.user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <h2>Sign in</h2>
      <form>
        <label htmlFor='name'>
          Name
          <input
            id='name'
            name='name'
            type='text'
            placeholder='E.g. John Doe'
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            id='email'
            name='email'
            type='email'
            placeholder='johndoe@mail.com'
          />
        </label>
        <label htmlFor='password'>
          Password
          <input id='password' name='password' type='password' />
        </label>
      </form>
      <p>
        Don&apos;t have an account? <Link to='/register'>Sign up</Link>
      </p>

      <button className='google-signin' onClick={handleClick}>
        <FcGoogle /> Sign in with Google
      </button>
      {/* <button>Log out</button> */}
    </Container>
  )
}
