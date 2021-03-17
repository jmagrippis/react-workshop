import { ExpandableWidget } from 'components/ExpandableWidget/ExpandableWidget'
import { Infographic } from 'components/Infographic/Infographic'

export const Dashboard = () => (
  <ul className="container max-w-xl font-sans bg-gray-100 shadow-sm rounded-sm flex flex-col space-y-4 p-4">
    <ExpandableWidget count={15} title="Tasks" />
    <ExpandableWidget
      count={7}
      title="Pending Deals"
      info="£70K, personal banking held"
    />
    <ExpandableWidget count={12} title="Hot Applicants" />
    <ExpandableWidget
      count={33}
      title="Letters"
      info="20 Pending.  13 finalised"
    />
    <Infographic />
    <Infographic />
  </ul>
)
