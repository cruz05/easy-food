import { useLocalStorage } from '../../hooks/useLocalStorage'
import { RecipeList } from '../Recipes/RecipeList'

export function Collections() {
  const [savedRecipes] = useLocalStorage('collection')
  return (
    <RecipeList
      recipes={savedRecipes}
      altMessage="You don't have any recipe in your collection."
    />
  )
}
