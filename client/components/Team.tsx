import { useTeam } from '../hooks/useTeam.ts'
import { MAX_TEAM_SIZE } from '../apis/paataka.ts'
import TeamSlot from './TeamSlot'

function Team() {
  const { data: team, isPending, error } = useTeam()

  if (isPending) return <p>Loading...</p>
  if (error) return <p>Couldn't load your team.</p>

  return (
    <div>
      <h2>Your team</h2>
      <p>{team.length} / 6</p>
      <div>
        {Array.from({ length: MAX_TEAM_SIZE }, (_, i) => (
          <TeamSlot key={team[i]?.id ?? `empty-${i}`} member={team[i]} />
        ))}
      </div>
    </div>
  )
}

export default Team
