import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import PokemonDetails from './components/PokemonDetails'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="pokemon/:name" element={<PokemonDetails />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
