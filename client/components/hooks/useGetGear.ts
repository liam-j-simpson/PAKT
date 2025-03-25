import { useQuery } from '@tanstack/react-query'
import * as api from '../api'

export function useGetGear(activityId: number, userId: number) {
  return useQuery({
    queryKey: ['gear'],
    queryFn: async () => {
      const data = await api.getGear(activityId, userId)
      return data
    },
  })
}
