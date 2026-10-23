export interface Pokedex {
  count: number
  items: Item[]
}

export interface Item {
  id: number
  name: string
  species: string
  imageUrl: string
  pokedexId: number
}
export interface Apilink {
  name: string
  url: string
}

export interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string | null
    back_default: string | null
  }
  eight: number
  base_experience: number | null
  sprites: {
    front_default: string
    back_default: string
  }
  abilities: Array<Ability>
  moves: Array<Move>
  types: Array<TypeInfo>
  stats: Array<Stat>
}

export interface PokemonSpecies {
  id: number
  name: string
  is_legendary: boolean
  is_mythical: boolean
}
