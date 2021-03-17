import { GetServerSideProps } from 'next'

import SSR from 'components/SSR'
import { fetchWidgets } from 'lib/api/fetchWidgets'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const widgets = await fetchWidgets()

  return {
    props: {
      widgets,
    },
  }
}

export default SSR
