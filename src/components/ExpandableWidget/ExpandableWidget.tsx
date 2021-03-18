import { FC } from 'react'
import cn from 'classnames'

import { Card } from 'components/Card/Card'
import { Widget, WidgetType } from 'lib/types'
import ChevronRightIcon from './chevron-right.svg'

export interface ExpandableWidgetType extends Widget {
  isExpanded?: boolean
}

interface Props extends ExpandableWidgetType {
  handleExpand: (id: WidgetType) => void
}

export const ExpandableWidget: FC<Props> = ({
  id,
  items,
  title,
  info,
  handleExpand,
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
      <ChevronRightIcon
        aria-label="expand widget"
        className={cn(
          'cursor-pointer text-green-600 w-8 transition-transform duration-300',
          {
            'transform rotate-90': isExpanded,
          }
        )}
        onClick={() => handleExpand(id)}
      />
    </div>
    {isExpanded ? (
      <ul className="mt-2">
        {items.map(({ id }) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    ) : null}
  </Card>
)
