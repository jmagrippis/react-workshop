import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const { pathname } = useRouter()

  const HomeElement = pathname === '/' ? 'h1' : 'div'

  return (
    <header className="w-full bg-gray-800 text-purple-100">
      <nav className="m-auto container flex flex-row items-center p-4">
        <HomeElement className="flex-grow">
          <Link href="/">
            <a className="transition duration-300 hover:text-purple-300">
              React Workshop
            </a>
          </Link>
        </HomeElement>
        <ul className="flex flex-row">
          <li>
            <Link href="/server">
              <a
                className="transition duration-300 hover:text-purple-300"
                aria-label="SSR / Server version"
              >
                SSR
              </a>
            </Link>
          </li>
          <li className="ml-3">
            <Link href="/client">
              <a
                className="transition duration-300 hover:text-purple-300"
                aria-label="SPA / Client version"
              >
                SPA
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
