import { client, sanityConfigured } from './client'

export type Beer = {
  _id: string
  name: string
  slug: { current: string }
  category: 'cask' | 'draft' | 'guest' | 'wine' | 'non-alcoholic'
  style?: string
  abv?: number
  description?: string
  image?: { asset: { url: string }; alt?: string }
  isActive: boolean
  isFeatured: boolean
  tags?: string[]
}

export type Event = {
  _id: string
  title: string
  slug: { current: string }
  date: string
  endDate?: string
  description?: string
  image?: { asset: { url: string } }
  category: string
  isFeatured: boolean
  externalLink?: string
}

export type FoodPartner = {
  _id: string
  name: string
  cuisine?: string
  description?: string
  logo?: { asset: { url: string } }
  website?: string
  phone?: string
  delivers: boolean
}

export type SiteSettings = {
  announcementBar?: string
  announcementActive: boolean
  instagramUrl?: string
  facebookUrl?: string
  untappdUrl?: string
  arsenalNavActive: boolean
  hours?: { days: string; hours: string }[]
  address?: string
  phone?: string
  newsletterHeading?: string
}

const IMAGE_FIELDS = `image { asset->{ url }, alt }`

async function safeFetch<T>(query: string, fallback: T, options = {}): Promise<T> {
  if (!sanityConfigured) return fallback
  try {
    return await client.fetch(query, {}, { next: { revalidate: 300 }, ...options })
  } catch {
    return fallback
  }
}

export async function getBeers(): Promise<Beer[]> {
  return safeFetch(`*[_type == "beer"] | order(category asc, order asc) { _id, name, slug, category, style, abv, description, ${IMAGE_FIELDS}, isActive, isFeatured, tags }`, [])
}

export async function getFeaturedBeer(): Promise<Beer | null> {
  const results = await safeFetch<Beer[]>(`*[_type == "beer" && isFeatured == true][0..0] { _id, name, slug, category, style, abv, description, ${IMAGE_FIELDS} }`, [])
  return results[0] ?? null
}

export async function getUpcomingEvents(limit = 6): Promise<Event[]> {
  return safeFetch(`*[_type == "event" && date >= now()] | order(date asc) [0..${limit - 1}] { _id, title, slug, date, endDate, description, ${IMAGE_FIELDS}, category, isFeatured, externalLink }`, [])
}

export async function getAllEvents(): Promise<Event[]> {
  return safeFetch(`*[_type == "event"] | order(date asc) { _id, title, slug, date, endDate, description, ${IMAGE_FIELDS}, category, isFeatured, externalLink }`, [])
}

export async function getFoodPartners(): Promise<FoodPartner[]> {
  return safeFetch(`*[_type == "foodPartner"] | order(order asc) { _id, name, cuisine, description, logo { asset->{ url } }, website, phone, delivers }`, [], { next: { revalidate: 3600 } })
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch(`*[_type == "siteSettings"][0] { announcementBar, announcementActive, instagramUrl, facebookUrl, untappdUrl, arsenalNavActive, hours, address, phone, newsletterHeading }`, null)
}
