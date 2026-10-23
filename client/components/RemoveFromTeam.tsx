import { useRemoveFromTeam } from '../hooks/useTeam.ts'

interface Props {
  id: number
  name: string
}

function RemoveFromTeam({ id, name }: Props) {
  const remove = useRemoveFromTeam()

  return (
    <div>
      <button
        onClick={() => remove.mutate(id)}
        disabled={remove.isPending}
        aria-label={`Remove ${name} from team`}
      >
        {remove.isPending ? 'Removing...' : 'Remove'}
      </button>
      {remove.error && <p>Couldn't remove {name}.</p>}
    </div>
  )
}

export default RemoveFromTeam
