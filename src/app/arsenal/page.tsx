import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arsenal Watch Parties',
  description: 'Watch Arsenal and the 2026 World Cup at Machine House Brewery. Early opening, coffee, and great beer.',
}

export default function ArsenalPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚽</span>
            <p className="text-xs tracking-[0.35em] uppercase text-gold">Cascadia Gooners at Machine House</p>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-cream font-medium mb-6 leading-tight">
            Arsenal<br />Watch Parties
          </h1>
          <p className="text-cream-muted text-lg max-w-xl leading-relaxed mb-8">
            Seattle's home for Arsenal supporters. We open early for kickoffs, we have coffee, and we always have a hand-pump ready to celebrate (or commiserate).
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/calendar"
              className="px-8 py-3 bg-maroon text-cream text-sm tracking-widest uppercase font-semibold hover:bg-maroon-dark transition-colors">
              Match Schedule
            </Link>
            <Link href="/taproom"
              className="px-8 py-3 border text-cream text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
              style={{ borderColor: 'rgba(245,240,224,0.2)' }}>
              Getting Here
            </Link>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-20">
          {[
            { title: 'Early Opening', desc: 'We open before kickoff for morning matches. Check the calendar for specific match times.' },
            { title: 'Coffee Available', desc: 'Not a morning drinker? We have coffee and non-alcoholic options for the early games.' },
            { title: 'Family Friendly', desc: 'All ages welcome. Bring the kids — football is for everyone.' },
            { title: 'Hand-Pump Always On', desc: 'A proper pint from the hand-pump is always ready, regardless of what time the match kicks off.' },
            { title: '2026 World Cup', desc: 'We\'ll be screening all the big matches. Check the schedule closer to the tournament.' },
            { title: 'The Gooner Community', desc: 'Connect with fellow Arsenal supporters in Seattle. Regulars, tourists, all welcome.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-6 border"
              style={{ borderColor: 'rgba(245,240,224,0.08)', backgroundColor: '#2a1a0c' }}>
              <h3 className="text-cream font-medium mb-2">{title}</h3>
              <p className="text-cream-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-10 border text-center" style={{ borderColor: 'rgba(219,0,7,0.3)', backgroundColor: '#2a1a0c' }}>
          <p className="font-serif text-2xl text-cream mb-3">Come As You Are</p>
          <p className="text-cream-muted mb-6 max-w-md mx-auto">
            No booking required for match days. Just show up, find a seat, and enjoy the game.
            Wearing red is optional but appreciated.
          </p>
          <Link href="/calendar"
            className="inline-block px-8 py-3 bg-maroon text-cream text-sm tracking-widest uppercase font-semibold hover:bg-maroon-dark transition-colors">
            See Upcoming Matches
          </Link>
        </div>
      </div>
    </div>
  )
}
