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
    <div>
      <h2>🐭 Home</h2>

      <p>
        Build your dream Pokémon team! Search for any Pokémon by name to see its
        stats and type, then add it to your team. You can have up to 6 Pokémon
        on your team at a time.
      </p>

      <Link to="/team" className="team-button">
        Are you ready for your dream team?
      </Link>

      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Pokémon name: </label>
        <input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="e.g. charmander"
        />
        <button type="submit">Search</button>
      </form>

      <section>
        <h3>Legendary Pokémon</h3>

        <label>
          <input
            type="checkbox"
            checked={showLegendaries}
            onChange={(e) => setShowLegendaries(e.target.checked)}
          />
          Show Legendary Pokémon
        </label>

        {showLegendaries && (
          <div>
            {isLoading && <p>Loading legendary Pokémon...</p>}
            {error && <p>{error}</p>}

            {!isLoading && !error && (
              <ul>
                {legendaryPokemon.map((pokemon) => (
                  <li key={pokemon.name}>
                    <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
