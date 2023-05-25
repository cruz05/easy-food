import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  updateProfile,
} from 'firebase/auth'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()
  const createAccount = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const signInWithAccount = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider()
    return signInWithRedirect(auth, provider)
  }

  const updateUserInfo = changes => {
    return updateProfile(user, changes)
  }

  const logout = () => signOut(auth)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        console.log('No user is logged in.')
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        facebookSignIn,
        createAccount,
        signInWithAccount,
        logout,
        updateUserInfo,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
