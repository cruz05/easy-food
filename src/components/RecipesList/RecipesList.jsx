import { useRecipes } from '../../hooks/useRecipes'
import { Container } from './RecipesList.styles'

export function RecipesList() {
  const { recipes } = useRecipes()

  return (
    <Container>
      {recipes.length > 0 &&
        recipes.map(recipe => (
          <div key={recipe.id} className='recipe-card'>
            <img src={recipe.image} alt='' />
            <h3>{recipe.title}</h3>
          </div>
        ))}
    </Container>
  )
}
