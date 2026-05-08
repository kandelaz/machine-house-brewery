import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Taproom',
  description: 'Visit Machine House Brewery at 5718 Rainier Ave S in Hillman City, Seattle.',
}

const HOURS = [
  { days: 'Monday – Tuesday', hours: '4:00 – 9:00 pm' },
  { days: 'Wednesday – Friday', hours: '4:00 – 9:30 pm' },
  { days: 'Saturday', hours: '2:00 – 9:30 pm' },
  { days: 'Sunday', hours: '2:00 – 7:00 pm' },
]

export default function TaproomPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">Hillman City, Seattle</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-16">The Taproom</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Hours */}
          <div>
            <h2 className="font-serif text-2xl text-cream mb-6">Hours</h2>
            <div className="space-y-4">
              {HOURS.map((h, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b"
                  style={{ borderColor: 'rgba(245,240,224,0.08)' }}>
                  <span className="text-cream-muted">{h.days}</span>
                  <span className="text-cream font-medium">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="font-serif text-2xl text-cream mb-6">Location</h2>
            <address className="not-italic text-cream-muted leading-relaxed mb-4">
              5718 Rainier Ave S<br />
              Seattle, WA 98118<br />
              <a href="tel:+12064026025" className="hover:text-cream transition-colors">206-402-6025</a>
            </address>
            <p className="text-cream-muted text-sm leading-relaxed mb-6">
              Located in the heart of Hillman City on Rainier Ave S. Street parking available. Accessible via Metro Route 7.
            </p>
            <a
              href="https://maps.google.com/?q=5718+Rainier+Ave+S+Seattle+WA+98118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-gold border-b pb-0.5 hover:text-cream transition-colors"
              style={{ borderColor: '#c9a84c' }}>
              Get Directions →
            </a>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-20">
          <h2 className="font-serif text-2xl text-cream mb-8">About the Space</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Family Friendly', desc: 'All ages welcome. A neighborhood gathering place for everyone.' },
              { title: 'Outside Food Welcome', desc: 'Bring your own or order delivery from our neighborhood partners.' },
              { title: 'Hand-Pump Service', desc: 'Traditional cask ale served the right way — naturally carbonated, cellar temp.' },
              { title: 'Sports on the Telly', desc: 'Watch Arsenal, Premier League, and the 2026 World Cup with us.' },
              { title: 'Dog Friendly Patio', desc: 'Four-legged locals are always welcome outside.' },
              { title: 'Community Events', desc: 'Bluegrass jams, pub quizzes, March Mildness, and more.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 border" style={{ borderColor: 'rgba(245,240,224,0.08)', backgroundColor: '#2a1a0c' }}>
                <h3 className="text-cream font-medium mb-2">{title}</h3>
                <p className="text-cream-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Private Events CTA */}
        <div className="p-10 border text-center" style={{ borderColor: 'rgba(201,168,76,0.2)', backgroundColor: '#2a1a0c' }}>
          <h2 className="font-serif text-2xl text-cream mb-3">Host Your Event Here</h2>
          <p className="text-cream-muted mb-6 max-w-md mx-auto leading-relaxed">
            Birthdays, corporate gatherings, team celebrations — the taproom is available for private hire.
          </p>
          <Link href="/private-events"
            className="inline-block px-8 py-3 bg-maroon text-cream text-sm tracking-widest uppercase font-semibold hover:bg-maroon-dark transition-colors">
            Enquire About Booking
          </Link>
        </div>
      </div>
    </div>
  )
}
