import { useEffect, useState } from 'react'
import { getRecipes } from '../services/recipes'

export function useRecipes() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getRecipes().then(newRecipes => setRecipes([...newRecipes]))
  }, [])
  return { recipes }
}
