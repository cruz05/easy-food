import { Route, Routes } from 'react-router-dom'
import { Form } from '../components/Form/Form'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { Recipes } from '../pages/Recipes'
import { AuthContextProvider } from '../context/AuthContext'

export function Router() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/recipes' element={<Recipes />}>
            <Route path=':id' element={<Recipes />} />
          </Route>
          <Route path='/login' element={<Form />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  )
}
