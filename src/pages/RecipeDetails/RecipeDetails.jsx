import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRecipeInfoById } from '../../services/recipes'
import { Container } from './RecipeDetails.styles'
import { Ingredient } from '../../components/Ingredient/Ingredient'
import { HiOutlineClock } from 'react-icons/hi'

export function RecipeDetails() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    getRecipeInfoById(id).then(recipeInfo => setRecipe(recipeInfo))
  }, [id])

  if (!recipe) return

  return (
    <Container>
      <h1>{recipe?.title}</h1>
      <div className='header'>
        <div className='recipe'>
          <img src={recipe.image} alt='Recipe Photo.' />
        </div>
        <div className='recipe-info'>
          <p>
            Source: <Link to={recipe.sourceUrl}>{recipe.sourceName}</Link>
          </p>
          <div>
            <div className='main-info'>
              <p className='minutes'>
                <HiOutlineClock />
                {recipe.readyInMinutes} minutes
              </p>
              {recipe?.dishTypes.map((type, i) => (
                <span key={i}>{type}</span>
              ))}
            </div>
            <div className='diets'>
              <h2>Diets</h2>
              <ul>
                {recipe?.diets.map((diet, i) => (
                  <li key={i}>{diet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='lists'>
        <div className='ingredients'>
          <h2>
            Ingredients
            <span className='servings'> / {recipe.servings} servings</span>
          </h2>
          {recipe.extendedIngredients.map((ingredient, i) => (
            <Ingredient key={i} name={ingredient.original} />
          ))}
        </div>
        <div className='instructions'>
          <h2>Instructions</h2>
          <ol>
            {recipe.analyzedInstructions.map(({ name, steps }, i) => (
              <>
                {name && <li key={i}>{name}</li>}
                {steps.map(({ step }, i) => (
                  <li key={i}>{step}</li>
                ))}
              </>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  )
}
