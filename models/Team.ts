export interface NewTeamMember {
  name: string
  pokemonId: number
  sprite: string
  types: string[]
}

export interface TeamMember extends NewTeamMember {
  id: number
}
