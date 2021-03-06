import Link from 'next/link'
import { useRouter } from 'next/router'
import GithubIcon from './github-mark.svg'

export const Header = () => {
  const { pathname } = useRouter()

  const HomeElement = pathname === '/' ? 'h1' : 'div'

  return (
    <header className="w-full bg-gray-800 text-purple-100">
      <nav className="m-auto container flex flex-row items-center p-4">
        <HomeElement className="flex-grow">
          <Link href="/">
            <a className="transition hover:text-purple-300">React Workshop</a>
          </Link>
        </HomeElement>
        <ul className="flex flex-row items-center">
          <li>
            <Link href="/ssr">
              <a
                className="transition hover:text-purple-300"
                aria-label="SSR / Server version"
              >
                SSR
              </a>
            </Link>
          </li>
          <li className="ml-3">
            <Link href="/spa">
              <a
                className="transition hover:text-purple-300"
                aria-label="SPA / Client version"
              >
                SPA
              </a>
            </Link>
          </li>

          <li className="ml-4">
            <a
              className="transition hover:text-purple-300"
              aria-label="github code repository"
              href="https://github.com/jmagrippis/react-workshop"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="transition hover:text-purple-300 w-6" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
