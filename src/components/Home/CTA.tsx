import Link from 'next/link'

export const CTA = () => (
  <section className="shadow-md">
    <h3 className="text-2xl p-8 bg-white rounded text-center">
      Choose your flavour 🍦
    </h3>
    <div className="bg-gray-50 p-8 rounded text-lg flex flex-col md:flex-row text-center">
      <Link href="/ssr">
        <a className="bg-white p-4 mb-4 md:mb-0 md:mr-4 rounded-sm shadow hover:shadow-md transition-shadow">
          SSR / Server
        </a>
      </Link>
      <Link href="/spa">
        <a className="bg-white p-4 rounded-sm shadow hover:shadow-md transition-shadow">
          SPA / Client
        </a>
      </Link>
    </div>
  </section>
)
