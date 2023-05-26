import { Link } from 'react-router-dom'
import { Card } from './RecipeCard.styles'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useState } from 'react'

export function RecipeCard({ recipe, handleSaveRecipe, handleRemoveRecipe }) {
  const { id, image, title } = recipe
  const [recipeCollection] = useLocalStorage('collection')
  const [savedRecipe, setSavedRecipe] = useState(
    recipeCollection.some(recipe => recipe.id === id)
  )

  const handleAdd = () => {
    handleSaveRecipe(id, recipe)
    setSavedRecipe(true)
  }

  const handleDelete = () => {
    handleRemoveRecipe(id)
    setSavedRecipe(false)
  }

  return (
    <Card>
      {savedRecipe ? (
        <button type='button' onClick={handleDelete}>
          <FaBookmark />
        </button>
      ) : (
        <button type='button' onClick={handleAdd}>
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
