import { useContext } from 'react'
import { Categories } from '../../components/Categories/Categories'
import { RecipeList } from '../../components/Recipes/RecipeList'
import { Input } from '../../components/Form/Input'
import { AuthContext } from '../../context/AuthContext'
import { useRecipes } from '../../hooks/useRecipes'
import { Container } from './Recipes.styles'
import { MdSearch } from 'react-icons/md'

export function Recipes() {
  const { user } = useContext(AuthContext)
  const { handleFilterSelect, handleRecipeSearch, recipes } = useRecipes()

  const handleSubmit = e => {
    e.preventDefault()
    const { recipe } = e.target

    if (recipe !== '') {
      handleRecipeSearch(recipe.value)
    }
  }

  const handleChange = e => handleFilterSelect(e.target.value)

  return (
    <Container>
      <p>Hello, {user.displayName}!</p>
      <h2>What would you like to cook today?</h2>
      <form className='search-bar' onSubmit={handleSubmit}>
        <Input type='text' name='recipe' placeholder='Search your food...' />
        <button>
          <MdSearch />
        </button>
      </form>
      <Categories handleChange={handleChange} />
      <RecipeList recipes={recipes}>Loading...</RecipeList>
    </Container>
  )
}
