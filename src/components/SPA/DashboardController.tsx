import { Dashboard } from 'components/Dashboard/Dashboard'
import { ExpandableWidgetType } from 'components/ExpandableWidget/ExpandableWidget'
import { WidgetType } from 'lib/types'
import { useCallback, useState } from 'react'
import { useWidgets } from './useWidgets'

export const DashboardController = () => {
  const widgets = useWidgets()
  const [expanded, setExpanded] = useState<WidgetType>(null)

  const handleExpand = useCallback(
    (id: WidgetType) => {
      setExpanded(expanded !== id ? id : null)
    },
    [expanded]
  )

  return widgets ? (
    <Dashboard
      expandableWidgets={widgets.map<ExpandableWidgetType>((widget) =>
        expanded === widget.id ? { ...widget, isExpanded: true } : widget
      )}
      handleExpand={handleExpand}
    />
  ) : (
    <div>loading...</div>
  )
}
