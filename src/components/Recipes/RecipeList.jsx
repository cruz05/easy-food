import { useLocalStorage } from '../../hooks/useLocalStorage'
import { RecipeCard } from './RecipeCard'
import { Container } from './RecipeList.styles'

export function RecipeList({ recipes, altMessage }) {
  const [recipeCollection, setRecipeCollection] = useLocalStorage('collection')

  const handleSaveRecipe = (id, recipe) => {
    const savedRecipe = recipeCollection.find(recipe => recipe.id === id)
    if (!savedRecipe) setRecipeCollection([...recipeCollection, recipe])
  }

  const handleRemoveRecipe = id => {
    setRecipeCollection(recipeCollection.filter(recipe => recipe.id !== id))
  }

  return (
    <Container>
      {recipes?.length > 0 ? (
        recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            handleSaveRecipe={handleSaveRecipe}
            handleRemoveRecipe={handleRemoveRecipe}
          />
        ))
      ) : (
        <p>{altMessage}</p>
      )}
    </Container>
  )
}
