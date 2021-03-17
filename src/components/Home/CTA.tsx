import Link from 'next/link'

export const CTA = () => (
  <section className="shadow-md">
    <h3 className="text-2xl p-8 bg-white rounded text-center">
      Choose your flavour 🍦
    </h3>
    <div className="bg-gray-50 p-8 rounded text-lg">
      <Link href="/ssr">
        <a className="bg-white p-4 mr-4 rounded-sm shadow hover:shadow-md transition-shadow duration-300">
          SSR / Server
        </a>
      </Link>
      <Link href="/spa">
        <a className="bg-white p-4 mr-4 rounded-sm shadow hover:shadow-md transition-shadow duration-300">
          SPA / Client
        </a>
      </Link>
    </div>
  </section>
)
