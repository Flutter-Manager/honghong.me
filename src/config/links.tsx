import { IconPencil, IconUserCircle } from '@tabler/icons-react'

export type Link = {
  href: string
  title: string
}

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

type FooterLinks = Array<{
  id: number
  links: Link[]
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <IconPencil size={14} />,
    href: '/materials',
    text: 'Materials'
  },
  {
    icon: <IconUserCircle size={14} />,
    href: '/about',
    text: 'About'
  }
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: '/',
        title: 'Home'
      },
      {
        href: '/materials',
        title: 'Materials'
      },
      {
        href: '/about',
        title: 'About'
      }
    ]
  }
]
