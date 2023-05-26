import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Container } from '../components/Form/Form.styles'
import { Form } from '../components/Form/Form'
import { GoogleButton, FacebookButton } from '../components/Button/AuthButton'
import { BsArrowLeftShort } from 'react-icons/bs'

export function Login() {
  const { user, signInWithAccount } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = e.target
    try {
      const result = await signInWithAccount(email.value, password.value)
      console.log(result)
      navigate('/recipes')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/recipes')
    }
  }, [user, navigate])

  return (
    <Container>
      <Link to='/' className='btn-home'>
        <BsArrowLeftShort />
      </Link>
      <div>
        <h2>Welcome back!</h2>
        <p>Please enter your details to sign in.</p>
        <Form id='login' handleSubmit={handleSubmit} />
        <p className='divider'>
          <span>Or sign in with</span>
        </p>
        <div className='buttons'>
          <GoogleButton />
          <FacebookButton />
        </div>
        <p>
          Don&apos;t have an account? <Link to='/register'>Sign up</Link>
        </p>
      </div>
    </Container>
  )
}
