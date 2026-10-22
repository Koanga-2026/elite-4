import { MAX_TEAM_SIZE } from '../apis/paataka.ts'
import { useAddToTeam, useTeam } from '../hooks/useTeam.ts'

interface Props {
  name: string
}

function AddToTeam({ name }: Props) {
  const { data: team } = useTeam()
  const add = useAddToTeam()
  const isFull = team ? team.length >= MAX_TEAM_SIZE : false

  return (
    <div>
      <button
        onClick={() => add.mutate({ name })}
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
