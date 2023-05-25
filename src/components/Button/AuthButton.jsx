import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { FaFacebookF } from 'react-icons/fa'
import { getRedirectResult } from 'firebase/auth'
import { auth } from '../../firebase'
import { FcGoogle } from 'react-icons/fc'

export const FacebookButton = () => {
  const { facebookSignIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleFacebookLogin = async () => {
    try {
      await facebookSignIn()
      const result = await getRedirectResult(auth)
      navigate('/recipes')
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button className='btn btn-facebook' onClick={handleFacebookLogin}>
      <FaFacebookF /> Facebook
    </button>
  )
}

export const GoogleButton = () => {
  const { googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn()
      navigate('/recipes')
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <button className='btn btn-google' onClick={handleGoogleLogin}>
      <FcGoogle /> Google
    </button>
  )
}
