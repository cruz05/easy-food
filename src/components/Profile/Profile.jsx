import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Input } from '../Form/Input'
import { Container } from './Profile.styles'

export function Profile() {
  const [profile, setProfile] = useLocalStorage('profile', {})
  const { user, updateUserInfo } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const location = e.target.location.value
    const description = e.target.description.value
    const website = e.target.website.value
    const newName = e.target.name.value

    if (location || description || website) {
      setProfile({ ...profile, location, description, website })
    }

    if (newName) {
      try {
        await updateUserInfo({ displayName: newName })
        console.log('Profile updated')
        navigate('/account')
      } catch (error) {
        console.error(error.message)
      }
    }

    e.target.reset()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          label='Name'
          type='text'
          id='name'
          placeholder={user.displayName || 'John Doe'}
        />
        <Input
          label='Location'
          id='location'
          type='text'
          placeholder={profile.location || 'Insert your location'}
        />
        <fieldset>
          <label htmlFor='description'>About me</label>
          <textarea
            placeholder={profile.description || 'I like...'}
            id='description'></textarea>
        </fieldset>
        <Input
          type='text'
          id='website'
          label='Personal Website'
          placeholder={profile.website || ''}
        />
        <button type='submit' className='btn-submit'>
          Save Changes
        </button>
      </form>
    </Container>
  )
}
