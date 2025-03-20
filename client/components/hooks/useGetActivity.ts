import { useQuery } from '@tanstack/react-query'
import * as api from '../api.ts'

export function useGetActivity() {
  return useQuery({
    queryKey: ['activity'],
    queryFn: async () => {
      const data = await api.getActivity()
      return data
    },
  })
}
