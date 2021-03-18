import { FC } from 'react'

import { Dashboard } from 'components/Dashboard/Dashboard'
import { ExpandableWidgetType } from 'components/ExpandableWidget/ExpandableWidget'
import { WidgetType } from 'lib/types'

type Props = { expandableWidgets: ExpandableWidgetType[] }

const handleExpand = (id: WidgetType) => {
  const urlParams = new URLSearchParams(window.location.search)
  const expanded = urlParams.get('expanded')
  const isAlreadyExpanded = expanded && parseInt(expanded) === id

  window.location.assign(
    isAlreadyExpanded
      ? window.location.pathname
      : `${window.location.pathname}?expanded=${id}`
  )
}

export const DashboardController: FC<Props> = ({ expandableWidgets }) => (
  <Dashboard
    expandableWidgets={expandableWidgets}
    handleExpand={handleExpand}
  />
)
