import { QueryClient } from 'react-query'

const DEFAULT_QUERY_STALE_TIME = 5 * 60 * 1_000
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_QUERY_STALE_TIME,
    },
  },
})
