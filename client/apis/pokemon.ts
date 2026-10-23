import request from 'superagent'
import type { Pokemon, PokemonSpecies } from '../../models/Pokemon.ts'

export default async function fetchPokemonByName(
  name: string,
): Promise<Pokemon> {
  const res = await request.get(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
  )
  return res.body as Pokemon
}

export async function fetchSpeciesByName(
  name: string,
): Promise<PokemonSpecies> {
  const res = await request.get(
    `https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}`,
  )
  return res.body as PokemonSpecies
}

interface PokemonSpeciesListResponse {
  results: { name: string; url: string }[]
}

export async function fetchPokemonSpeciesList(): Promise<
  PokemonSpeciesListResponse['results']
> {
  const res = await request.get(
    'https://pokeapi.co/api/v2/pokemon-species?limit=1000',
  )
  return res.body.results as PokemonSpeciesListResponse['results']
}
