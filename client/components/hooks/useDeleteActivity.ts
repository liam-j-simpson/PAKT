import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteActivity } from '../api'

export function useDeleteActivity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: number) => {
      return await deleteActivity(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['activity'],
      })
    },
  })
}
