import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import useLegendaryPokemon from '../hooks/useLegendaryPokemon.ts'

function Home() {
  const [search, setSearch] = useState('')
  const [showLegendaries, setShowLegendaries] = useState(false)
  const navigate = useNavigate()

  const {
    pokemon: legendaryPokemon,
    isLoading,
    error,
  } = useLegendaryPokemon(showLegendaries)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (search.trim()) navigate(`/pokemon/${search.trim().toLowerCase()}`)
  }

  return (
    <div className="home-page-wrapper">
      <div className="homeDetail">
        <div className="pokedex-header-strip"></div>

        <h2>⚡ Pokédex Central ⚡</h2>

        <div className="trainer-banner-container">
          <img
            src="https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=1000&auto=format&fit=crop"
            alt="Pokémon trainer and Pokémon banner"
            className="trainer-group-image"
          />
        </div>

        <p className="app-description">
          Build your ultimate dream Pokémon team! Search for any Pokémon by name
          to inspect its stats and types, then assemble your lineup of up to 6
          companion Pokémon.
        </p>

        <div className="team-section">
          <p className="team-prompt">Are you ready for your dream team?</p>
          <Link to="/team" className="pokeball-link" title="Go to Team Builder">
            <div className="pokeball">
              <div className="pokeball__button"></div>
            </div>
          </Link>
        </div>

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

        <section className="legendary-filter">
          <h3>✨ Legendary Pokémon ✨</h3>

          <label>
            <input
              type="checkbox"
              checked={showLegendaries}
              onChange={(e) => setShowLegendaries(e.target.checked)}
            />
            Show Legendary Pokémon
          </label>

          {showLegendaries && (
            <div className="legendary-results">
              {isLoading && <p>Loading legendary Pokémon...</p>}

              {error && <p role="alert">{error}</p>}

              {!isLoading && !error && (
                <ul>
                  {legendaryPokemon.map((pokemon) => (
                    <li key={pokemon.name}>
                      <Link to={`/pokemon/${pokemon.name}`}>
                        {pokemon.name.replace(/-/g, ' ')}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home
