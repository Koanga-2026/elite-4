import { useQuery } from '@tanstack/react-query'
import fetchPokemonByName from '../apis/pokemon.ts'
import type { TeamMember } from '../../models/Team.ts'
import RemoveFromTeam from './RemoveFromTeam'

interface Props {
  member?: TeamMember
}

function TeamSlot({ member }: Props) {
  const { data: pokemon } = useQuery({
    queryKey: ['pokemon', member?.name],
    queryFn: () => fetchPokemonByName(member!.name),
    enabled: Boolean(member),
  })

  if (!member) return <div>Empty slot</div>

  return (
    <div>
      {pokemon?.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt={member.name} />
      )}
      <p>{member.name}</p>
      <RemoveFromTeam id={member.id} name={member.name} />
    </div>
  )
}

export default TeamSlot
