import { FC } from 'react'

import { Card } from 'components/Card/Card'
import ChevronRightIcon from './chevron-right.svg'

type Props = {
  count: number
  title: string
  info?: string
  isExpanded?: boolean
}

export const ExpandableWidget: FC<Props> = ({
  count,
  title,
  info,
  isExpanded,
  children,
}) => (
  <Card>
    <div className="flex items-center">
      <div className="flex-grow">
        <div className="flex">
          <div className="text-2xl font-semibold leading-8 text-blue-400 mr-2">
            {count}
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-8">{title}</h3>
            {info ? <div>{info}</div> : null}
          </div>
        </div>
      </div>
      {isExpanded ? (
        children
      ) : (
        <ChevronRightIcon
          aria-label="expand widget"
          className="cursor-pointer text-green-600 w-8"
        />
      )}
    </div>
  </Card>
)
