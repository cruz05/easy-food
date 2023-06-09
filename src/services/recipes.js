const API_URL = 'https://api.spoonacular.com/recipes'
const API_KEY = import.meta.env.VITE_API_KEY

export const getRecipes = async (offset = 0, type = 'all', query = '') => {
  try {
    const response = await fetch(
      `${API_URL}/complexSearch?apiKey=${API_KEY}&number=12&offset=${offset}&type=${type}&titleMatch=${query}`
    )
    const recipes = await response.json()
    const { results } = recipes

    return results
  } catch (err) {
    console.error(err)
  }
}

export const getRecipeInfoById = async id => {
  try {
    const response = await fetch(
      `${API_URL}/${id}/information?apiKey=${API_KEY}`
    )
    const recipe = await response.json()

    console.log(recipe)
    return recipe
  } catch (error) {
    console.error(error)
  }
}
