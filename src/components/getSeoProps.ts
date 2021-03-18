import { rootUrl } from 'lib/constants'

const defaultSeo = {
  title: 'React Workshop | Pretty Interactive React',
  description:
    'A series of workshops created for the lovely staff over at Zoopla who are keen to learn React!',
  openGraph: {
    type: 'website',
    locale: 'en_UK',
    url: rootUrl,
    site_name: 'React Workshop',
    images: [
      {
        url: `${rootUrl}/images/hero.png`,
        width: 512,
        height: 512,
        alt: 'A workshop to generate bright React ideas',
      },
    ],
  },
}

export const getSeoProps = ({
  title = defaultSeo.title,
  description = defaultSeo.description,
  openGraph = {},
  twitter = {},
} = {}) => ({
  title,
  description,
  openGraph: { ...defaultSeo.openGraph, title, description, ...openGraph },
})
