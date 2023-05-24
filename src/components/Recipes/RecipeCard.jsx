import { Link } from 'react-router-dom'
import { Card } from './RecipeCard.styles'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useState } from 'react'

export function RecipeCard({ recipe }) {
  const { id, image, title } = recipe
  const [recipeCollection, setRecipeCollection] = useLocalStorage(
    'collection',
    []
  )
  const [savedRecipe, setSavedRecipe] = useState(
    recipeCollection.some(recipe => recipe.id === id)
  )

  const handleSaveRecipe = () => {
    setSavedRecipe(true)
    const savedRecipe = recipeCollection.find(recipe => recipe.id === id)
    if (!savedRecipe) setRecipeCollection([...recipeCollection, recipe])
  }

  const handleRemoveRecipe = () => {
    setSavedRecipe(false)
    setRecipeCollection(recipeCollection.filter(recipe => recipe.id !== id))
  }

  return (
    <Card>
      {savedRecipe ? (
        <button type='button' onClick={handleRemoveRecipe}>
          <FaBookmark />
        </button>
      ) : (
        <button type='button' onClick={handleSaveRecipe}>
          <FaRegBookmark />
        </button>
      )}

      <Link to={`/recipes/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </Card>
  )
}
