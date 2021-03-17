import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { QueryClientProvider } from 'react-query'

import { Header } from './Header'
import { Footer } from './Footer'
import { getSeoProps } from './getSeoProps'
import { queryClient } from './queryClient'

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Head>
    <DefaultSeo {...getSeoProps()} />
    <QueryClientProvider client={queryClient}>
      <div className="w-full flex flex-grow flex-col items-center justify-between">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </QueryClientProvider>
  </>
)
