import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cask Club',
  description: 'Join the Machine House Cask Club — exclusive releases, perks, and priority access for loyal members.',
}

const PERKS = [
  { title: 'Exclusive Releases', desc: 'First access to limited cask tappings, vintage ales, and barrel-aged specials before they hit the floor.' },
  { title: 'Members-Only Events', desc: 'Private cask tappings, brewery tours, and tastings reserved for Cask Club members.' },
  { title: 'Loyalty Discount', desc: '10% off all purchases at the taproom bar and online store.' },
  { title: 'Quarterly Box', desc: 'A curated selection of merchandise, glassware, and small-batch bottles shipped each quarter.' },
  { title: 'Name on the Wall', desc: 'Your name featured on the Cask Club board in the taproom.' },
  { title: 'Priority Booking', desc: 'First in line for private event bookings and special dinners.' },
]

export default function CaskClubPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">Membership</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-4">Cask Club</h1>
        <p className="text-cream-muted mb-16 max-w-xl leading-relaxed text-[17px]">
          Machine House's loyalty program for those who believe the best beers are pulled from a hand-pump. Your membership funds the traditions we keep alive.
        </p>

        {/* Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-20">
          {PERKS.map(({ title, desc }) => (
            <div key={title} className="p-6 border" style={{ borderColor: 'rgba(201,168,76,0.15)', backgroundColor: '#2a1a0c' }}>
              <div className="w-8 h-px bg-gold mb-4" />
              <h3 className="text-cream font-medium mb-2">{title}</h3>
              <p className="text-cream-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Membership tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { name: 'Annual Membership', price: '$75 / year', highlight: false,
              includes: ['All 6 perks listed above', 'Digital membership card', 'Monthly email with what\'s new on cask'] },
            { name: 'Founding Member', price: '$120 / year', highlight: true,
              includes: ['Everything in Annual', 'Founding member plaque', 'Private annual dinner with the brewers', 'Signed bottle of Vintage Ale'] },
          ].map(({ name, price, highlight, includes }) => (
            <div key={name} className="p-8 border"
              style={{
                borderColor: highlight ? '#c9a84c' : 'rgba(245,240,224,0.1)',
                backgroundColor: highlight ? '#2a1a0c' : '#1c1008',
              }}>
              {highlight && (
                <span className="text-xs tracking-widest uppercase text-gold border px-2 py-0.5 mb-4 inline-block"
                  style={{ borderColor: '#c9a84c' }}>
                  Best Value
                </span>
              )}
              <h3 className="font-serif text-2xl text-cream mb-2">{name}</h3>
              <p className="text-gold text-xl font-semibold mb-6">{price}</p>
              <ul className="space-y-2 mb-8">
                {includes.map(item => (
                  <li key={item} className="flex items-start gap-2 text-cream-muted text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 text-sm tracking-widest uppercase font-semibold transition-colors"
                style={highlight
                  ? { backgroundColor: '#8b1a0e', color: '#f5f0e0' }
                  : { border: '1px solid rgba(245,240,224,0.2)', color: '#f5f0e0' }}>
                Join Now
              </button>
            </div>
          ))}
        </div>

        <p className="text-cream-dim text-sm text-center">
          Already a member? <a href="/contact" className="text-gold hover:text-cream transition-colors underline underline-offset-4">Contact us</a> to renew or update your membership.
        </p>
      </div>
    </div>
  )
}
