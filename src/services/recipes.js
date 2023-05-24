const API_URL = 'https://api.spoonacular.com/recipes'
const API_KEY = import.meta.env.VITE_API_KEY

export const getRecipes = async (type = 'all', query = '') => {
  try {
    const response = await fetch(
      `${API_URL}/complexSearch?apiKey=${API_KEY}&number=12&type=${type}&titleMatch=${query}`
    )
    const recipes = await response.json()
    const { results } = recipes

    return results
  } catch (err) {
    console.error(err)
  }
}
