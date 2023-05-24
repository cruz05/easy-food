import { RecipeCard } from './RecipeCard'
import { Container } from './RecipeList.styles'

export function RecipeList({ recipes, children }) {
  return (
    <Container>
      {recipes?.length > 0 ? (
        recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <p>{children}</p>
      )}
    </Container>
  )
}
