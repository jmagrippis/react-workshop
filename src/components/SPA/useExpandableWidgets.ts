import { useCallback, useMemo, useState } from 'react'

import { ExpandableWidgetType } from 'components/ExpandableWidget/ExpandableWidget'
import { WidgetType } from 'lib/types'
import { useWidgets } from './useWidgets'

export const useExpandableWidgets = () => {
  const widgets = useWidgets()
  const [expanded, setExpanded] = useState<WidgetType>(null)

  const handleExpand = useCallback(
    (id: WidgetType) => {
      setExpanded(expanded !== id ? id : null)
    },
    [expanded]
  )

  return useMemo(
    () => ({
      handleExpand,
      expandableWidgets: widgets?.map<ExpandableWidgetType>((widget) =>
        expanded === widget.id ? { ...widget, isExpanded: true } : widget
      ),
    }),
    [widgets, expanded, handleExpand]
  )
}
