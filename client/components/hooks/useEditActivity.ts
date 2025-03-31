import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editActivity } from '../api'

export function useEditActivity() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: string }) => {
      return await editActivity(id, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['activity'],
      })
    },
  })
}
