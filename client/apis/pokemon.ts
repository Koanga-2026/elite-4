import request from 'superagent'
import type { Pokemon } from '../../models/Pokemon.ts'

export default async function fetchPokemonByName(
  name: string,
): Promise<Pokemon> {
  const res = await request.get(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
  )
  return res.body as Pokemon
}
