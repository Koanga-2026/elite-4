import type { TeamMember } from '../../models/Team.ts'

interface Props {
  member?: TeamMember
}

function TeamSlot({ member }: Props) {
  if (!member) return <div>Empty slot</div>

  return (
    <div>
      <p>{member.name}</p>
    </div>
  )
}

export default TeamSlot
