import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Container } from '../components/Form/Form.styles'
import { Form } from '../components/Form/Form'
import { Input } from '../components/Form/Input'
import { updateProfile } from 'firebase/auth'
import { FacebookButton, GoogleButton } from '../components/Button/AuthButton'

export function Register() {
  const { createAccount } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password, username } = e.target

    if (email.value && password.value && username.value) {
      try {
        const result = await createAccount(email.value, password.value)
        await updateProfile(result.user, { displayName: username.value })
        navigate('/recipes')
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Container>
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
