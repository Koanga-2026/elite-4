// client/apis/paataka.ts
import request from 'superagent'
import type { NewTeamMember, TeamMember } from '../../models/Team.ts'

const TOKEN = import.meta.env.VITE_TOKEN
const BASE_URL = `https://paataka.cloud/api/_/playful-penguins/team`

export const MAX_TEAM_SIZE = 6

export async function getTeam(): Promise<TeamMember[]> {
  const res = await request.get(BASE_URL).auth(TOKEN, { type: 'bearer' })
  return Array.isArray(res.body) ? res.body : res.body.items
}

export async function addToTeam(member: NewTeamMember): Promise<void> {
  const team = await getTeam()
  if (team.length >= MAX_TEAM_SIZE) {
    throw new Error('Your team is full')
  }
  await request.post(BASE_URL).send(member).auth(TOKEN, { type: 'bearer' })
}

export async function removeFromTeam(id: number): Promise<void> {
  await request.delete(`${BASE_URL}/${id}`).auth(TOKEN, { type: 'bearer' })
}
