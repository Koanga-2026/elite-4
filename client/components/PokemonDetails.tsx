import { useParams, Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import fetchPokemonByName from '../apis/pokemon.ts'
import StatsPanel from './StatsPanel'
import AddToTeam from './AddToTeam'

function PokemonDetails() {
  const { name } = useParams()

  const {
    data: pokemon,
    isPending,
    error,
  } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonByName(name as string),
    enabled: Boolean(name),
  })

  if (isPending) {
    return (
      <div className="home-page-wrapper">
        <div className="homeDetail">
          <div className="pokedex-header-strip"></div>
          <p className="app-description" style={{ margin: '3rem 0' }}>
            Loading Pokémon data...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="home-page-wrapper">
        <div className="homeDetail">
          <div className="pokedex-header-strip"></div>
          <p
            className="app-description"
            style={{ margin: '3rem 0', color: '#dc2626' }}
          >
            {"Couldn't find that Pokémon! Check the spelling and try again."}
          </p>
          <Link
            to="/"
            className="pokemon-search-btn"
            style={{
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '2rem',
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="home-page-wrapper">
      <div className="homeDetail">
        {/* Pokedex decorative top indicator strip */}
        <div className="pokedex-header-strip"></div>

        {/* Pokémon Name & ID */}
        <h2 className="pokemon-details-title">{pokemon.name}</h2>
        <p className="pokemon-details-id">#{pokemon.id}</p>

        {/* Sprite Image Container */}
        {pokemon.sprites.front_default && (
          <div className="pokemon-sprite-container">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="pokemon-details-img"
            />
          </div>
        )}

        {/* Type Badges */}
        <div className="pokemon-types-container">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className={`type-badge type-${t.type.name}`}
            >
              {t.type.name}
            </span>
          ))}
        </div>

        {/* Stats and Add to Team Panels */}
        <div className="pokemon-info-panels">
          <StatsPanel stats={pokemon.stats} />
          <AddToTeam name={pokemon.name} />
        </div>

        {/* Navigation Buttons ("My team" & "Back to Search") */}
        <div
          style={{
            paddingBottom: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/team"
            className="pokemon-search-btn"
            style={{
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            My team
          </Link>
          <Link
            to="/"
            className="pokemon-search-btn"
            style={{
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Back to Search
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
