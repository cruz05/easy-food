import { Header } from '../components/Header/Header'
import { RecipesList } from '../components/RecipesList/RecipesList'

export function Home() {
  return (
    <>
      <Header />
      <main>
        <h2>Explore Recipes</h2>
        <RecipesList />
      </main>
    </>
  )
}
