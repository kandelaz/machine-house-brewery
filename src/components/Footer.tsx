import Link from 'next/link'
import type { SiteSettings } from '@/sanity/queries'
import NewsletterForm from './NewsletterForm'

const DEFAULT_HOURS = [
  { days: 'Mon – Tue', hours: '4 – 9 pm' },
  { days: 'Wed – Fri', hours: '4 – 9:30 pm' },
  { days: 'Saturday',  hours: '2 – 9:30 pm' },
  { days: 'Sunday',    hours: '2 – 7 pm' },
]

export default function Footer({ settings }: { settings: SiteSettings | null }) {
  const hours   = settings?.hours?.length ? settings.hours : DEFAULT_HOURS
  const address = settings?.address ?? '5718 Rainier Ave S, Seattle, WA 98118'
  const phone   = settings?.phone   ?? '206-402-6025'
  const year    = new Date().getFullYear()

  return (
    <footer className="bg-brown-light border-t" style={{ borderColor: 'rgba(245,240,224,0.07)' }}>
      {/* Newsletter */}
      <div className="bg-brown-mid py-12 px-6">
        <div className="max-w-lg mx-auto text-center">
          <p className="font-serif text-2xl text-cream mb-2">
            {settings?.newsletterHeading ?? 'Stay in the Loop'}
          </p>
          <p className="text-cream-muted text-sm mb-6 tracking-wide">
            Bottle releases, special tappings, and events — straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-serif text-lg text-cream mb-3">Machine House Brewery</p>
          <p className="text-cream-muted text-sm leading-relaxed">
            Traditional British cask ales.<br />
            Hillman City, Seattle.
          </p>
          <div className="flex gap-3 mt-5">
            {settings?.instagramUrl && (
              <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer"
                className="text-cream-dim hover:text-cream text-xs tracking-widest uppercase transition-colors">
                Instagram
              </a>
            )}
            {settings?.facebookUrl && (
              <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer"
                className="text-cream-dim hover:text-cream text-xs tracking-widest uppercase transition-colors">
                Facebook
              </a>
            )}
            {settings?.untappdUrl && (
              <a href={settings.untappdUrl} target="_blank" rel="noopener noreferrer"
                className="text-cream-dim hover:text-cream text-xs tracking-widest uppercase transition-colors">
                Untappd
              </a>
            )}
          </div>
        </div>

        {/* Hours */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gold mb-4">Hours</p>
          <ul className="space-y-2">
            {hours.map((h, i) => (
              <li key={i} className="flex justify-between text-sm text-cream-muted">
                <span>{h.days}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-cream-muted">{address}</p>
          <p className="text-sm text-cream-muted mt-1">{phone}</p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gold mb-4">Explore</p>
          <ul className="space-y-3">
            {[
              ['Beer', '/beer'], ['Taproom', '/taproom'], ['Events', '/calendar'],
              ['Private Events', '/private-events'], ['Cask Club', '/cask-club'],
              ['March Mildness', '/march-mildness'], ['Food', '/food'], ['About', '/about'], ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-cream-muted hover:text-cream transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t py-5 text-center text-xs tracking-widest uppercase text-cream-dim"
        style={{ borderColor: 'rgba(245,240,224,0.07)' }}>
        © {year} Machine House Brewery · Seattle, WA
      </div>
    </footer>
  )
}
