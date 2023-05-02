import { useState } from 'react'
import { RecipesList } from '../components/RecipesList/RecipesList'

export function Recipes() {
  const [search, setSearch] = useState('')

  console.log(search)

  return (
    <>
      <input
        type='text'
        name='recipe'
        placeholder='Search for a recipe...'
        onChange={e => setSearch(e.target.value)}
        className='input-recipe'
      />
      <h2>Explore Recipes</h2>
      <RecipesList />
    </>
  )
}
