import { MAX_TEAM_SIZE } from '../apis/paataka.ts'
import { useAddToTeam, useTeam } from '../hooks/useTeam.ts'
import type { NewTeamMember } from '../../models/Team.ts'
interface Props {
  member: NewTeamMember
}
//the AddTeam function only passing name but want it the full NewTeamMember object(interface - defined in team.ts) so need to put in the missing data (was only passing name - TS error needing all the data)
//SOlution = import NewTeamMember interface which has the required (missing) properties / pass as a prop / pass the missing properties from PokemonDetails into addTeam and update AddTeam to include them in mutation.
function AddToTeam({ member }: Props) {
  const { data: team } = useTeam()
  const add = useAddToTeam()
  const isFull = team ? team.length >= MAX_TEAM_SIZE : false

  return (
    <div>
      <button
        onClick={() => add.mutate(member)} //pass the member object into the mutation
        disabled={!team || isFull || add.isPending}
      >
        {isFull ? 'Team full' : add.isPending ? 'Adding...' : 'Add to team'}
      </button>
      {add.isSuccess && <p>Added to your team</p>}
      {add.error && <p>{add.error.message}</p>}
    </div>
  )
}

export default AddToTeam
