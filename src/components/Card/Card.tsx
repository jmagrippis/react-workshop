import { FC } from 'react'
import cn from 'classnames'

type Props = {
  className?: string
}

export const Card: FC<Props> = ({ children, className }) => (
  <div className={cn('bg-white p-4 rounded-sm shadow-lg', className)}>
    {children}
  </div>
)
