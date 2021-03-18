import { ExpandableWidgetType } from 'components/ExpandableWidget/ExpandableWidget'
import { Body } from './Body'

export type SSRProps = { expandableWidgets: ExpandableWidgetType[] }
const SSR = ({ expandableWidgets }) => (
  <Body expandableWidgets={expandableWidgets} />
)

export default SSR
