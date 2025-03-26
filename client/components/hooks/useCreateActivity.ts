import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createActivity } from '../api'

export function useCreateActivity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (name: { name: string | undefined }) => {
      return await createActivity(name)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['activity'],
      })
    },
  })
}
