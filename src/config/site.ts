import { type IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  favicons: IconDescriptor[]
}

const prodBaseURL = 'https://gtusmashers.com'
const devBaseURL = 'http://localhost:3000'

const site: Site = {
  url: process.env.NODE_ENV === 'production' ? prodBaseURL : devBaseURL,
  title: 'GTU Smashers',
  name: 'GTU Smashers',
  keywords: ["GTU past papers",
    "GTU engineering study materials",
    "GTU exam prep",
    "Gujarat Technological University resources",
    "GTU previous year papers",
    "GTU exam patterns",
    "GTU engineering exams",
    "GTU study guides",
    "GTU exam strategies",
    "GTU exam insights",
    "GTU test papers",
    "GTU question banks",
    "GTU exam resources",
    "GTU syllabus coverage",
    "GTU academic support"],
  titleTemplate: '- GTU Smashers',
  description: 'Master GTU engineering exams with our curated past papers and essential study resources. Elevate your prep and boost grades with our tailored materials.',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png'
    }
  ]
}

export default site
