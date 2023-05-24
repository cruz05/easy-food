import { useEffect, useState } from 'react'
import { getRecipes } from '../services/recipes'

export function useRecipes() {
  const [recipes, setRecipes] = useState([])
  const [titleSearch, setTitleSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const handleRecipeSearch = search => setTitleSearch(search)
  const handleFilterSelect = filter => setFilter(filter)

  useEffect(() => {
    getRecipes(filter, titleSearch)
      .then(newRecipes => {
        newRecipes && setRecipes([...newRecipes])
      })
      .catch(error => console.error(error))
  }, [filter, titleSearch])

  return { recipes, handleRecipeSearch, handleFilterSelect }
}
