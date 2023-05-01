import { useEffect, useState } from 'react'
import { Container } from './RecipesList.styles'

const API_URL = 'https://api.spoonacular.com/recipes'
const API_KEY = import.meta.env.VITE_API_KEY

export function RecipesList() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/complexSearch?apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(({ results }) => setRecipes(results))
      .catch(error => console.error(error))
  }, [])

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
