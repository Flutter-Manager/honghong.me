import { allMaterials, allPages } from 'contentlayer/generated';
import { type MetadataRoute } from 'next';

import site from '@/config/site';

const sitemap = (): MetadataRoute.Sitemap => {
  const materials = allMaterials.map((post) => ({
    url: `${site.url}/material/${post.slug}`,
    lastModified: post.date.split('T')[0]
  }))

  const routes = [
    '',
    '/material',
    '/guestbook',
    '/projects',
    '/dashboard',
    ...allPages.map((page) => `/${page.slug}`),
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...materials]
}

export default sitemap
