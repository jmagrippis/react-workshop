import { rootUrl } from 'lib/constants'
import { Widget } from 'lib/types'

export const fetchWidgets = async () => {
  const res = await fetch(`${rootUrl}/api/dashboard`)
  const data: { widgets: Widget[] } = await res.json()

  return data.widgets
}
