/* eslint-disable react/prop-types */
import { createContext } from 'react'
import {
  browserSessionPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup
  // signInWithRedirect,
  // signOut
} from 'firebase/auth'
import { auth } from '../firebase'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    setPersistence(auth, browserSessionPersistence).then(() => {
      return signInWithPopup(auth, provider)
    })
  }
  return (
    <AuthContext.Provider value={{ googleSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}
