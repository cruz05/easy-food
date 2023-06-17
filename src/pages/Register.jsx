import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Container } from '../components/Form/Form.styles'
import { Form } from '../components/Form/Form'
import { Input } from '../components/Form/Input'
import { updateProfile } from 'firebase/auth'
import { FacebookButton, GoogleButton } from '../components/Button/AuthButton'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Toast } from '../components/Toast/Toast'

export function Register() {
  const { createAccount } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password, username } = e.target

    if (email.value && password.value && username.value) {
      try {
        const result = await createAccount(email.value, password.value)
        await updateProfile(result.user, { displayName: username.value })
        navigate('/recipes')
        // console.log(result)
      } catch (error) {
        if (error.code === 'auth/weak-password') {
          setError('Incorrect password should be at least 6 characters.')
        } else if (error.code === 'auth/email-already-in-use') {
          setError('Email is invalid or already taken.')
        } else {
          setError('Internal Server Error. Try again later.')
        }
        // console.log(error.code)
      }
    }
  }

  const closeToast = () => setError(null)

  return (
    <Container>
      {error && (
        <Toast error onClose={closeToast}>
          {error}
        </Toast>
      )}
      <Link to='/' className='btn-home'>
        <BsArrowLeftShort />
      </Link>
      <div>
        <h2>Create an account</h2>
        <p>Join to us and cook with confidence.</p>
        <Form id='register' handleSubmit={handleSubmit}>
          <Input
            label='Name'
            type='text'
            id='username'
            name='username'
            placeholder='e.g. John Doe'
            required
          />
        </Form>
        <div className='divider'>
          <span>Or sign up with</span>
        </div>
        <div className='buttons'>
          <GoogleButton />
          <FacebookButton />
        </div>
        <p>
          Already have an account? <Link to='/login'>Sign in</Link>
        </p>
      </div>
    </Container>
  )
}
