import { AuthContextProvider } from './context/AuthContext'
import { Router } from './routes'

const App = () => (
  <AuthContextProvider>
    <Router />
  </AuthContextProvider>
)

export default App
