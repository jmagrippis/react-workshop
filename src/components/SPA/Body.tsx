import { DashboardController } from './DashboardController'

export const Body = () => (
  <main className="w-full flex-grow py-4 bg-prism">
    <div className="container p-4 flex flex-col items-center">
      <h2 className="text-4xl leading-normal mb-6">Client Dashboard</h2>
      <section className="mb-4">
        <p className="mb-2">
          This page handles user interactions on the client!
        </p>
        <p>
          A server is still needed of course: it responds with the initial HTML,
          but then "Javascript takes over".
        </p>
      </section>
      <DashboardController />
    </div>
  </main>
)
