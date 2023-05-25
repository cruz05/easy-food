import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { Recipes } from '../pages/Recipes/Recipes'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Account } from '../pages/Account/Account'
import { ProtectedRoute } from './ProtectedRoute'

export function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/account/' element={<Account />}></Route>
          <Route path='/recipes'>
            <Route index element={<Recipes />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
