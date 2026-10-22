import { useParams } from 'react-router'
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

  if (isPending) return <p>Loading...</p>
  if (error) return <p>Couldnt find that Pokemon.</p>

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>#{pokemon.id}</p>
      {pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
      <ul>
        {pokemon.types.map((t) => (
          <li key={t.type.name}>{t.type.name}</li>
        ))}
      </ul>
      <StatsPanel stats={pokemon.stats} />
      <AddToTeam name={pokemon.name} />
    </div>
  )
}

export default PokemonDetails
