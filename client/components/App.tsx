import { Link, Outlet, useLocation } from 'react-router'

function App() {
  const { pathname } = useLocation() // current URL path, e.g. "/", "/team"
  const isHome = pathname === '/'

  return (
    <>
      {/* HEADER: shows on every page */}
      <header className="NavHeader">
        <h1>Elite Four Pokédex</h1>

        {/* NAV: only shows when we're NOT on the home page */}
        {!isHome && (
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
