import { GetServerSideProps } from 'next'

import SSR, { SSRProps } from 'components/SSR'
import { ExpandableWidgetType } from 'components/ExpandableWidget/ExpandableWidget'
import { fetchWidgets } from 'lib/api/fetchWidgets'

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const widgets = await fetchWidgets()
  const expanded =
    typeof context.query.expanded === 'string'
      ? parseInt(context.query.expanded)
      : null

  const expandableWidgets = widgets.map<ExpandableWidgetType>((widget) =>
    expanded === widget.id ? { ...widget, isExpanded: true } : widget
  )
  return {
    props: {
      expandableWidgets,
    },
  }
}

export default SSR
