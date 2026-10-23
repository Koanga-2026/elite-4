import { Link } from 'react-router'
import { useTeam } from '../hooks/useTeam.ts'
import { MAX_TEAM_SIZE } from '../apis/paataka.ts'
import TeamSlot from './TeamSlot'

function Team() {
  const { data: team, isPending, error } = useTeam()

  if (isPending) return <p className="team-loading">Loading...</p>
  if (error) return <p className="team-error">{"Couldn't load your team."}</p>

  return (
    <div className="team">
      <h2 className="team-title">Your team</h2>

      <p className="team-count">
        {team.length} / {MAX_TEAM_SIZE}
      </p>

      <div className="team-slots">
        {Array.from({ length: MAX_TEAM_SIZE }, (_, i) => (
          <TeamSlot key={team[i]?.id ?? `empty-${i}`} member={team[i]} />
        ))}
      </div>

      {/* Home Pokéball button */}
      <div className="team-nav">
        <Link to="/" className="team-nav__ball" title="Go Home">
          <div className="pokeball">
            <div className="pokeball__button"></div>
          </div>
          <span className="team-nav__label">Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Team
