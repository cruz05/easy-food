import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { Recipes } from '../pages/Recipes'

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/recipes' element={<Recipes />}>
          <Route path=':id' element={<Recipes />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
