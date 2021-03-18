import { Dashboard } from 'components/Dashboard/Dashboard'
import { useExpandableWidgets } from './useExpandableWidgets'

export const DashboardController = () => {
  const { expandableWidgets, handleExpand } = useExpandableWidgets()

  return expandableWidgets ? (
    <Dashboard
      expandableWidgets={expandableWidgets}
      handleExpand={handleExpand}
    />
  ) : (
    <div>loading...</div>
  )
}
