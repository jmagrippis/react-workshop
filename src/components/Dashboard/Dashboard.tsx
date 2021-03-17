import { FC } from 'react'

import {
  ExpandableWidget,
  ExpandableWidgetProps,
} from 'components/ExpandableWidget/ExpandableWidget'
import { Infographic } from 'components/Infographic/Infographic'

type Props = { expandableWidgets: ExpandableWidgetProps[] }

export const Dashboard: FC<Props> = ({ expandableWidgets }) => (
  <ul className="container max-w-xl font-sans bg-gray-100 shadow-sm rounded-sm flex flex-col space-y-4 p-4">
    {expandableWidgets.map(({ id, items, title, info }) => (
      <ExpandableWidget
        key={id}
        id={id}
        items={items}
        title={title}
        info={info}
      />
    ))}
    <Infographic />
    <Infographic />
  </ul>
)
