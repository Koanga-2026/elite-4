import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import PokemonDetails from './components/PokemonDetails'
import Team from './components/Team'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="pokemon/:name" element={<PokemonDetails />} />
    <Route path="team" element={<Team />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
