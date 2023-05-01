import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<p>Not Found</p>} />
    </Routes>
  )
}
