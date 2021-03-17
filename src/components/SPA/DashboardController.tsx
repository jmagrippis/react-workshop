import { Dashboard } from 'components/Dashboard/Dashboard'
import { useWidgets } from './useWidgets'

export const DashboardController = () => {
  const widgets = useWidgets()

  return widgets ? (
    <Dashboard expandableWidgets={widgets} />
  ) : (
    <div>loading...</div>
  )
}
