import { FC } from 'react'

import {
  ExpandableWidget,
  ExpandableWidgetType,
} from 'components/ExpandableWidget/ExpandableWidget'
import { Infographic } from 'components/Infographic/Infographic'
import { WidgetType } from 'lib/types'

type Props = {
  expandableWidgets: ExpandableWidgetType[]
  handleExpand: (id: WidgetType) => void
}

export const Dashboard: FC<Props> = ({ expandableWidgets, handleExpand }) => (
  <ul className="container max-w-xl font-sans bg-gray-100 shadow-sm rounded-sm flex flex-col space-y-4 p-4">
    {expandableWidgets.map(({ id, items, title, info, isExpanded }) => (
      <ExpandableWidget
        key={id}
        id={id}
        items={items}
        title={title}
        info={info}
        isExpanded={isExpanded}
        handleExpand={handleExpand}
      />
    ))}
    <Infographic />
    <Infographic />
  </ul>
)
