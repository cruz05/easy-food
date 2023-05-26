import { useCallback, useState } from 'react'

export function useLocalStorage(key, initialValue = []) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = useCallback(
    value => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
        setStoredValue(value)
      } catch (error) {
        console.error(error)
      }
    },
    [key]
  )

  return [storedValue, setValue]
}
