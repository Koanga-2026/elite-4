import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import useLegendaryPokemon from '../hooks/useLegendaryPokemon.ts'
import bannerImage from '../src/assets/trainer-banner.webp'
import ash from '../src/assets/Pokemon-Ash-Ketchum.webp'

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

        {/* Ash Ketchum welcome avatar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1rem 0',
          }}
        >
          <img
            src={ash}
            alt="Ash Ketchum trainer avatar"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
              borderRadius: '50%',
              border: '2px solid #1f2937',
            }}
          />
        </div>

        <div className="trainer-banner-container">
          <img
            src={bannerImage}
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
          <h3 className="team-prompt">Are you ready for your dream team?</h3>
          <Link to="/team" className="pokeball-link" title="Go to Team Builder">
            <div className="pokeball">
              <div className="pokeball__button"></div>
            </div>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="search-form">
          <label htmlFor="search" className="sr-only">
            Search Pokemon
          </label>
          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden="true">
              🔍
            </span>
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
                        <img
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                          alt={pokemon.name}
                          width="96"
                          height="96"
                        />
                        <span>{pokemon.name.replace(/-/g, ' ')}</span>
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
