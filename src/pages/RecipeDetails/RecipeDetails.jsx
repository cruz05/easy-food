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
      <div className='header'>
        <h1>{recipe?.title}</h1>
        <p className='author'>
          By <Link to={recipe.sourceUrl}>{recipe?.sourceName}</Link>
        </p>
        <div className='recipe-img'>
          <img src={recipe?.image} alt='Recipe Photo.' />
        </div>
        <div className='details'>
          <div className='dish-types'>
            {recipe?.dishTypes.map((type, i) => (
              <span key={i}>{type}</span>
            ))}
          </div>
          <p className='minutes'>
            <HiOutlineClock />
            {recipe?.readyInMinutes} minutes
          </p>
          {recipe?.cuisines.length > 0 && (
            <div className='cuisines'>
              <h2>Cuisines: </h2>
              <p>{recipe.cuisines.join(', ')}</p>
            </div>
          )}
          {recipe?.diets.length > 0 && (
            <div className='diets'>
              <h2>Diets: </h2>
              <p>{recipe.diets.join(', ')}</p>
            </div>
          )}
        </div>
      </div>
      {}
      <div className='content'>
        <div className='ingredients'>
          <h2>
            Ingredients
            <span className='servings'> / {recipe?.servings} servings</span>
          </h2>
          {recipe?.extendedIngredients.map(({ original }, i) => (
            <Ingredient key={i} name={original} />
          ))}
        </div>
        <div className='instructions'>
          <h2>Instructions</h2>
          <ol>
            {recipe?.analyzedInstructions.map(({ name, steps }, i) => (
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
