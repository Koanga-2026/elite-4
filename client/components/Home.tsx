import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

function Home() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (search.trim()) navigate(`/pokemon/${search.trim().toLowerCase()}`)
  }

  return (
    <div className="home-page-wrapper">
      <div className="homeDetail">
        {/* Pokedex decorative top indicator strip */}
        <div className="pokedex-header-strip"></div>

        <h2>⚡ Pokédex Central ⚡</h2>

        {/* Ash, Brock & Misty Trainer Banner Container */}
        <div className="trainer-banner-container">
          <img
            src="https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=1000&auto=format&fit=crop"
            alt="Ash, Brock and Misty with Pokémon"
            className="trainer-group-image"
          />
        </div>

        {/* Explain the app */}
        <p className="app-description">
          Build your ultimate dream Pokémon team! Search for any Pokémon by name
          to inspect its stats and types, then assemble your lineup of up to 6
          companion Pokémon.
        </p>

        {/* Link to the team page with circular Pokéball */}
        <div className="team-section">
          <p className="team-prompt">Are you ready for your dream team?</p>
          <Link to="/team" className="pokeball-link" title="Go to Team Builder">
            <div className="pokeball">
              <div className="pokeball__button"></div>
            </div>
          </Link>
        </div>

        {/* Themed Search box */}
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Pokémon (e.g. pikachu)"
            />
          </div>
          <button type="submit" className="pokemon-search-btn">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
