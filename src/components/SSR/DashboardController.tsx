import { FC } from 'react'

import { Dashboard } from 'components/Dashboard/Dashboard'
import { Widget } from 'lib/types'

type Props = { widgets: Widget[] }

export const DashboardController: FC<Props> = ({ widgets }) => (
  <Dashboard expandableWidgets={widgets} />
)
