import { useEffect, useState } from 'react'
import { fetchPokemonSpeciesList } from '../apis/pokemon.ts'
import type { PokemonSpecies } from '../../models/Pokemon.ts'

interface SpeciesListItem {
  name: string
  url: string
}

export default function useLegendaryPokemon(enabled: boolean) {
  const [pokemon, setPokemon] = useState<PokemonSpecies[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return

    let cancelled = false

    async function loadLegendaryPokemon() {
      setIsLoading(true)
      setError(null)

      try {
        const speciesList: SpeciesListItem[] = await fetchPokemonSpeciesList()

        const legendary = await Promise.all(
          speciesList.map(async (item) => {
            const res = await fetch(item.url)
            if (!res.ok) throw new Error('Failed to fetch species')
            return (await res.json()) as PokemonSpecies
          }),
        )

        if (!cancelled) {
          setPokemon(legendary.filter((item) => item.is_legendary))
        }
      } catch {
        if (!cancelled) setError('Could not load legendary Pokémon.')
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    void loadLegendaryPokemon()

    return () => {
      cancelled = true
    }
  }, [enabled])

  return { pokemon, isLoading, error }
}
