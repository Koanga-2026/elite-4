import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addToTeam, getTeam, removeFromTeam } from '../apis/paataka.ts'

export function useTeam() {
  return useQuery({ queryKey: ['team'], queryFn: getTeam })
}

export function useAddToTeam() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: addToTeam,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['team'] }),
  })
}

export function useRemoveFromTeam() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: removeFromTeam,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['team'] }),
  })
}
