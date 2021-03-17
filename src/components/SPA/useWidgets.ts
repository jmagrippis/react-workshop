import { useQuery } from 'react-query'

import { fetchWidgets } from 'lib/api/fetchWidgets'
import { Widget } from 'lib/types'

export const useWidgets = () => {
  const { data } = useQuery<Widget[]>('widgets', fetchWidgets)

  return data
}
