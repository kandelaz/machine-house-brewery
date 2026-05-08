import type { Metadata } from 'next'
import { getAllEvents } from '@/sanity/queries'

export const metadata: Metadata = {
  title: 'Events Calendar',
  description: 'Upcoming events at Machine House Brewery — live music, pub quiz, Arsenal watch parties, and more.',
}

const CATEGORY_COLOR: Record<string, string> = {
  regular: 'rgba(245,240,224,0.3)',
  special: '#c9a84c',
  arsenal: '#DB0007',
  'march-mildness': '#c9a84c',
  'cask-club': '#8b1a0e',
}

const CATEGORY_LABEL: Record<string, string> = {
  regular: '', special: 'Special', arsenal: 'Arsenal', 'march-mildness': 'March Mildness', 'cask-club': 'Cask Club',
}

export default async function CalendarPage() {
  const all = await getAllEvents()
  const now = new Date()
  const upcoming = all.filter(e => new Date(e.date) >= now)
  const past = all.filter(e => new Date(e.date) < now).slice(0, 6)

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">What's On</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-16">Events</h1>

        {upcoming.length === 0 ? (
          <p className="text-cream-muted text-center py-20">
            No upcoming events listed yet — follow us on Instagram for the latest.
          </p>
        ) : (
          <div className="space-y-px">
            {upcoming.map(event => {
              const d = new Date(event.date)
              const cat = event.category
              return (
                <div key={event._id}
                  className="flex gap-6 py-6 border-b group"
                  style={{ borderColor: 'rgba(245,240,224,0.08)' }}>
                  {/* Date block */}
                  <div className="flex-shrink-0 w-16 text-center">
                    <p className="text-gold font-semibold text-2xl leading-none">
                      {d.getDate()}
                    </p>
                    <p className="text-cream-dim text-xs tracking-widest uppercase mt-1">
                      {d.toLocaleDateString('en-US', { month: 'short' })}
                    </p>
                    <p className="text-cream-dim text-xs mt-1">
                      {d.toLocaleDateString('en-US', { weekday: 'short' })}
                    </p>
                  </div>

                  {/* Event info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h2 className="text-cream font-medium text-lg group-hover:text-gold transition-colors">
                        {event.title}
                      </h2>
                      {cat && CATEGORY_LABEL[cat] && (
                        <span className="text-xs tracking-widest uppercase px-2 py-0.5 border"
                          style={{ color: CATEGORY_COLOR[cat], borderColor: CATEGORY_COLOR[cat] + '60' }}>
                          {CATEGORY_LABEL[cat]}
                        </span>
                      )}
                    </div>
                    <p className="text-cream-dim text-sm mb-2">
                      {d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                      {event.endDate && ` – ${new Date(event.endDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`}
                    </p>
                    {event.description && (
                      <p className="text-cream-muted text-sm leading-relaxed max-w-xl">{event.description}</p>
                    )}
                    {event.externalLink && (
                      <a href={event.externalLink} target="_blank" rel="noopener noreferrer"
                        className="mt-3 inline-block text-xs tracking-widest uppercase text-gold hover:text-cream transition-colors">
                        RSVP / Tickets →
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Schema markup for events */}
        {upcoming.length > 0 && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': upcoming.slice(0, 10).map(e => ({
              '@type': 'Event',
              name: e.title,
              startDate: e.date,
              endDate: e.endDate,
              description: e.description,
              location: {
                '@type': 'Place',
                name: 'Machine House Brewery',
                address: { '@type': 'PostalAddress', streetAddress: '5718 Rainier Ave S', addressLocality: 'Seattle', addressRegion: 'WA' },
              },
            })),
          })}} />
        )}
      </div>
    </div>
  )
}
