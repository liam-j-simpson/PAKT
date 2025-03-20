import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createActivity } from '../api'

export function useCreateActivity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (name: string) => {
      return await createActivity(name)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['activity'],
      })
    },
  })
}
