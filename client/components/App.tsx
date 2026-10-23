import { Link, Outlet, useLocation } from 'react-router'

function App() {
  const { pathname } = useLocation() // current URL path, e.g. "/", "/team"
  const isHome = pathname === '/'
  const isTeam = pathname === '/team' // Team page has its own Pokéball Home button

  return (
    <>
      {/* HEADER: shows on every page */}
      <header className="NavHeader">
        <h1>Elite Four Pokédex</h1>

        {/* NAV: hidden on Home and Team, shown on other pages (e.g. Pokémon details) */}
        {!isHome && !isTeam && (
          <nav>
            <Link to="/" className="team-button">
              Home
            </Link>
          </nav>
        )}
      </header>

      {/* The current page (Home, PokemonDetails or Team) renders here */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
