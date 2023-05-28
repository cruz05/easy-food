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
  const {
    recipes,
    loading,
    handleFilterSelect,
    handleRecipeSearch,
    handleRecipesLoad,
  } = useRecipes()

  const handleSubmit = e => {
    e.preventDefault()
    const { recipe } = e.target

    if (recipe !== '') {
      handleRecipeSearch(recipe.value)
    }
  }

  const handleClick = () => handleRecipesLoad(recipes.length)
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
      <RecipeList recipes={recipes} altMessage='Loading...' />
      {!loading && (
        <button className='btn-load' onClick={handleClick}>
          Load more recipes
        </button>
      )}
    </Container>
  )
}
