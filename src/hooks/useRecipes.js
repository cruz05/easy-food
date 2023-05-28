import { useEffect, useState } from 'react'
import { getRecipes } from '../services/recipes'

export function useRecipes() {
  const [recipes, setRecipes] = useState([])
  const [titleSearch, setTitleSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleRecipeSearch = search => {
    setRecipes([])
    setTitleSearch(search)
  }
  const handleFilterSelect = filter => {
    setRecipes([])
    setFilter(filter)
  }
  const handleRecipesLoad = recipesCount => setOffset(recipesCount + 1)

  useEffect(() => {
    setLoading(true)
    getRecipes(offset, filter, titleSearch)
      .then(newRecipes => {
        newRecipes && setRecipes(prevRecipes => [...prevRecipes, ...newRecipes])
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [offset, filter, titleSearch])

  return {
    recipes,
    handleRecipeSearch,
    handleFilterSelect,
    handleRecipesLoad,
    loading,
  }
}
