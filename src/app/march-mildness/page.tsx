import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'March Mildness',
  description: 'Machine House Brewery\'s annual Mild Month celebration across Seattle. Find participating accounts, rules, and the leaderboard.',
}

const PARTICIPATING = [
  { name: 'Machine House Brewery', neighborhood: 'Hillman City', address: '5718 Rainier Ave S' },
  { name: 'The Pine Box', neighborhood: 'Capitol Hill', address: '1600 Melrose Ave' },
  { name: 'Optimism Brewing', neighborhood: 'Capitol Hill', address: '1158 Broadway E' },
  { name: 'Beveridge Place Pub', neighborhood: 'West Seattle', address: '6413 California Ave SW' },
  { name: "Chuck's Hop Shop", neighborhood: 'Central District', address: '656 E Olive Way' },
]

export default function MarchMildnessPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">Every March</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream font-medium mb-6 leading-tight">
            March<br />Mildness
          </h1>
          <p className="text-cream-muted text-lg max-w-xl leading-relaxed">
            Seattle's celebration of the Dark Mild — the most underappreciated style in craft beer. Every March, we partner with bars and restaurants across the city to get this humble, beautiful beer on more taps.
          </p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { num: '01', title: 'Find a Venue', desc: 'Visit any participating account on the map below. Look for the March Mildness tap marker.' },
            { num: '02', title: 'Order a Mild', desc: 'Order a Machine House Dark Mild (or any Mild style) and get your punch card stamped.' },
            { num: '03', title: 'Win Prizes', desc: 'Collect stamps across multiple venues. The more you explore, the more you earn.' },
          ].map(({ num, title, desc }) => (
            <div key={num} className="p-6 border" style={{ borderColor: 'rgba(245,240,224,0.08)', backgroundColor: '#2a1a0c' }}>
              <p className="font-serif text-4xl text-gold/20 mb-4">{num}</p>
              <h3 className="text-cream font-medium mb-2">{title}</h3>
              <p className="text-cream-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Participating accounts */}
        <div className="mb-20">
          <h2 className="font-serif text-2xl text-cream mb-8">Participating Accounts 2026</h2>
          <div className="space-y-px border-t" style={{ borderColor: 'rgba(245,240,224,0.08)' }}>
            {PARTICIPATING.map(({ name, neighborhood, address }) => (
              <div key={name} className="flex items-center justify-between py-5 border-b"
                style={{ borderColor: 'rgba(245,240,224,0.08)' }}>
                <div>
                  <p className="text-cream font-medium">{name}</p>
                  <p className="text-cream-dim text-sm mt-0.5">{address}</p>
                </div>
                <span className="text-xs tracking-widest uppercase text-cream-dim border px-2 py-1"
                  style={{ borderColor: 'rgba(245,240,224,0.15)' }}>
                  {neighborhood}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-cream-dim text-sm">More venues announcing throughout March — follow us on Instagram for updates.</p>
        </div>

        {/* Punch Card CTA */}
        <div className="p-10 border text-center" style={{ borderColor: 'rgba(201,168,76,0.2)', backgroundColor: '#2a1a0c' }}>
          <h2 className="font-serif text-2xl text-cream mb-3">Get Your Punch Card</h2>
          <p className="text-cream-muted mb-6 max-w-md mx-auto">
            Pick up a physical punch card at Machine House or any participating venue. Complete the card to qualify for prizes.
          </p>
          <a href="/contact"
            className="inline-block px-8 py-3 bg-maroon text-cream text-sm tracking-widest uppercase font-semibold hover:bg-maroon-dark transition-colors">
            Contact Us for Details
          </a>
        </div>
      </div>
    </div>
  )
}
