import { FC } from 'react'

import { Card } from 'components/Card/Card'
import { Widget } from 'lib/types'
import ChevronRightIcon from './chevron-right.svg'

export interface ExpandableWidgetProps extends Widget {
  isExpanded?: boolean
}

export const ExpandableWidget: FC<ExpandableWidgetProps> = ({
  items,
  title,
  info,
  isExpanded,
}) => (
  <Card>
    <div className="flex items-center">
      <div className="flex-grow">
        <div className="flex">
          <div className="text-2xl font-semibold leading-8 text-blue-400 mr-2">
            {items.length}
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-8">{title}</h3>
            {info ? <div>{info}</div> : null}
          </div>
        </div>
      </div>
      {isExpanded ? (
        <ul>
          {items.map(({ id }) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      ) : (
        <ChevronRightIcon
          aria-label="expand widget"
          className="cursor-pointer text-green-600 w-8"
        />
      )}
    </div>
  </Card>
)
