import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { Recipes } from '../pages/Recipes/Recipes'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { RecipeDetails } from '../pages/RecipeDetails/RecipeDetails'
import { Account } from '../pages/Account/Account'
import { ProtectedRoute } from './ProtectedRoute'
import { Profile } from '../components/Profile/Profile'
import { UserRecipes } from '../components/UserRecipes/UserRecipes'
import { Collections } from '../components/Collection/Collections'

export function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/account/' element={<Account />}>
            <Route index element={<Profile />} />
            <Route path='recipes' element={<UserRecipes />} />
            <Route path='collections' element={<Collections />} />
          </Route>
          <Route path='/recipes'>
            <Route index element={<Recipes />} />
            <Route path=':id/' element={<RecipeDetails />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
