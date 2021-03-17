import { Widget } from 'lib/types'
import { Body } from './Body'

export type SSRProps = { widgets: Widget[] }
const SSR = ({ widgets }) => <Body widgets={widgets} />

export default SSR
