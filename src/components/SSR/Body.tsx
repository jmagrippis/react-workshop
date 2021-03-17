import { FC } from 'react'

import { Widget } from 'lib/types'
import { DashboardController } from './DashboardController'

type Props = { widgets: Widget[] }

export const Body: FC<Props> = ({ widgets }) => (
  <main className="w-full flex-grow py-4 bg-prism">
    <div className="container p-4 flex flex-col items-center">
      <h2 className="text-4xl leading-normal mb-6">
        Server-Side Rendered Dashboard
      </h2>
      <section className="mb-4">
        <p className="mb-2">
          This pages simulates doing all of the work on the server. Yep,{' '}
          <strong>all of it</strong>, including which section you've got
          expanded!
        </p>
        <p>
          This is probably <strong>not a good idea</strong> in 2021.
        </p>
      </section>
      <DashboardController widgets={widgets} />
    </div>
  </main>
)
