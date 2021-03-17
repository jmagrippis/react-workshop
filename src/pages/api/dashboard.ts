import { NextApiRequest, NextApiResponse } from 'next'

import { Widget, WidgetType } from 'lib/types'
import { generateItems } from 'lib/generateItems'

export const widgets: Widget[] = [
  {
    id: WidgetType.Tasks,
    items: generateItems(),
    title: 'Tasks',
  },
  {
    id: WidgetType.PendingDeals,
    title: 'Pending Deals',
    items: generateItems(),
    info: '£70K, personal banking held',
  },
  {
    id: WidgetType.HotApplicants,
    items: generateItems(),
    title: 'Hot Applicants',
  },
  {
    id: WidgetType.Letters,
    items: generateItems(33),
    title: 'Letters',
    info: '20 Pending.  13 finalised',
  },
]

const dashboardHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(404).end('method not supported')
    return
  }

  res.json({ widgets })
}

export default dashboardHandler
