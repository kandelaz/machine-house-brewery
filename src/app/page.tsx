import type { Metadata } from 'next'
import Link from 'next/link'
import { getFeaturedBeer, getUpcomingEvents, getSiteSettings } from '@/sanity/queries'

export const metadata: Metadata = {
  title: 'Machine House Brewery — Traditional Cask Ales, Hillman City Seattle',
  description: 'Real Ale brewed the traditional way. Visit our taproom at 5718 Rainier Ave S in Hillman City, Seattle.',
}

const CATEGORY_LABEL: Record<string, string> = {
  cask: 'Cask', draft: 'Draft', guest: 'Guest Tap', wine: 'Wine', 'non-alcoholic': 'Non-Alc',
}

export default async function HomePage() {
  const [featured, events] = await Promise.all([getFeaturedBeer(), getUpcomingEvents(4)])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-brown/30 to-brown z-10" />
        <div className="absolute inset-0" style={{ backgroundColor: '#1c1008' }}>
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c9a84c\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6 animate-fade-up">
            Hillman City · Seattle
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream font-medium leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '100ms' }}>
            Tradition You Can Taste.
          </h1>
          <p className="text-cream-muted text-lg md:text-xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: '200ms' }}>
            Real Ale served from the hand-pump. British-style session beers brewed for the neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: '300ms' }}>
            <Link href="/beer"
              className="px-8 py-3 bg-maroon text-cream text-sm tracking-widest uppercase font-semibold hover:bg-maroon-dark transition-colors">
              View Taplist
            </Link>
            <Link href="/taproom"
              className="px-8 py-3 border text-cream text-sm tracking-widest uppercase font-semibold hover:border-gold hover:text-gold transition-colors"
              style={{ borderColor: 'rgba(245,240,224,0.3)' }}>
              Find Us
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-fade-up"
          style={{ animationDelay: '500ms' }}>
          <div className="w-px h-12 bg-gradient-to-b from-cream/40 to-transparent" />
        </div>
      </section>

      {/* Featured Beer */}
      {featured && (
        <section className="py-20 px-6 bg-brown-light">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">Now Featured</p>
              <h2 className="font-serif text-4xl text-cream mb-3">{featured.name}</h2>
              {featured.style && (
                <p className="text-sm tracking-widest uppercase text-gold mb-4">
                  {featured.style}{featured.abv ? ` · ${featured.abv}% ABV` : ''}
                </p>
              )}
              <p className="text-cream-muted leading-relaxed mb-6">{featured.description}</p>
              <Link href="/beer"
                className="text-xs tracking-widest uppercase text-gold border-b pb-0.5 hover:text-cream transition-colors"
                style={{ borderColor: '#c9a84c' }}>
                See Full Taplist →
              </Link>
            </div>
            <div className="w-full md:w-72 h-64 md:h-80 bg-brown-mid flex items-center justify-center">
              {featured.image?.asset?.url ? (
                <img src={featured.image.asset.url} alt={featured.name}
                  className="w-full h-full object-cover" />
              ) : (
                <span className="font-serif text-6xl text-gold/20">MH</span>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      {events.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-gold mb-2">At the Taproom</p>
                <h2 className="font-serif text-3xl text-cream">Upcoming Events</h2>
              </div>
              <Link href="/calendar"
                className="hidden sm:block text-xs tracking-widest uppercase text-cream-muted hover:text-cream transition-colors">
                All Events →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {events.map(event => {
                const d = new Date(event.date)
                return (
                  <div key={event._id} className="p-5 border hover:border-gold/30 transition-colors group cursor-default"
                    style={{ borderColor: 'rgba(245,240,224,0.08)', backgroundColor: '#2a1a0c' }}>
                    <p className="text-xs tracking-widest uppercase text-gold mb-3">
                      {d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </p>
                    <p className="font-serif text-lg text-cream leading-snug mb-2 group-hover:text-gold transition-colors">
                      {event.title}
                    </p>
                    <p className="text-xs text-cream-muted">
                      {d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                    </p>
                  </div>
                )
              })}
            </div>
            <Link href="/calendar" className="sm:hidden mt-6 block text-xs tracking-widest uppercase text-cream-muted">
              All Events →
            </Link>
          </div>
        </section>
      )}

      {/* Quick Info strip */}
      <section className="bg-brown-mid py-12 px-6 border-t border-b" style={{ borderColor: 'rgba(245,240,224,0.07)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Hours</p>
            <p className="text-cream-muted text-sm">Mon–Fri 4pm · Sat–Sun 2pm</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Location</p>
            <p className="text-cream-muted text-sm">5718 Rainier Ave S<br />Hillman City, Seattle</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Contact</p>
            <a href="tel:+12064026025" className="text-cream-muted text-sm hover:text-cream transition-colors">
              206-402-6025
            </a>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { href: '/cask-club', label: 'Cask Club', desc: 'Join our loyalty program and get exclusive releases and perks.' },
            { href: '/private-events', label: 'Private Events', desc: 'Book the taproom for birthdays, corporate events, and gatherings.' },
            { href: '/march-mildness', label: 'March Mildness', desc: 'Our annual Mild Month celebration across Seattle. See the map.' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href}
              className="p-8 border group hover:border-gold/30 transition-colors block"
              style={{ borderColor: 'rgba(245,240,224,0.08)', backgroundColor: '#2a1a0c' }}>
              <h3 className="font-serif text-xl text-cream mb-3 group-hover:text-gold transition-colors">{label}</h3>
              <p className="text-cream-muted text-sm leading-relaxed">{desc}</p>
              <span className="mt-4 block text-xs tracking-widest uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreweryOrBarOrPub',
        name: 'Machine House Brewery',
        url: 'https://www.machinehousebrewery.com',
        telephone: '+12064026025',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '5718 Rainier Ave S',
          addressLocality: 'Seattle',
          addressRegion: 'WA',
          postalCode: '98118',
          addressCountry: 'US',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 47.544, longitude: -122.268 },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday'], opens: '16:00', closes: '21:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday', 'Thursday', 'Friday'], opens: '16:00', closes: '21:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '14:00', closes: '21:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '14:00', closes: '19:00' },
        ],
        servesCuisine: 'British-Style Cask Ales',
        priceRange: '$$',
      })}} />
    </>
  )
}
