import type { Metadata } from 'next'
import { getBeers } from '@/sanity/queries'

export const metadata: Metadata = {
  title: 'Beer',
  description: 'Our full taplist — cask ales, draft beers, guest taps, wine, and non-alcoholic options.',
}

const CATEGORIES = [
  { key: 'cask',          label: 'Cask Ales',      desc: 'Naturally carbonated, served via hand-pump at cellar temperature. The heart of Machine House.' },
  { key: 'draft',         label: 'Draft',           desc: 'Kegged beers on tap.' },
  { key: 'guest',         label: 'Guest Taps',      desc: 'Rotating selection from friends in the industry.' },
  { key: 'wine',          label: 'Wine',            desc: '' },
  { key: 'non-alcoholic', label: 'Non-Alcoholic',   desc: '' },
]

export default async function BeerPage() {
  const allBeers = await getBeers()
  const active = allBeers.filter(b => b.isActive)

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">On Tap Now</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-4">The Taplist</h1>
        <p className="text-cream-muted mb-16 max-w-lg leading-relaxed">
          Machine House specializes in British-style session ales — low ABV, full flavour, built for drinking.
        </p>

        {CATEGORIES.map(({ key, label, desc }) => {
          const beers = active.filter(b => b.category === key)
          if (!beers.length) return null
          return (
            <section key={key} className="mb-16">
              <div className="flex items-end gap-4 mb-2">
                <h2 className="font-serif text-2xl text-cream">{label}</h2>
                {key === 'cask' && (
                  <span className="mb-0.5 text-xs tracking-widest uppercase text-gold border px-2 py-0.5"
                    style={{ borderColor: '#c9a84c' }}>
                    Hand-Pump
                  </span>
                )}
              </div>
              {desc && <p className="text-cream-muted text-sm mb-6 max-w-xl">{desc}</p>}
              <div className="border-t" style={{ borderColor: 'rgba(245,240,224,0.08)' }}>
                {beers.map(beer => (
                  <div key={beer._id}
                    className="flex items-start justify-between py-5 border-b gap-6"
                    style={{ borderColor: 'rgba(245,240,224,0.08)' }}>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-cream font-medium">{beer.name}</h3>
                        {beer.tags?.map(tag => (
                          <span key={tag} className="text-xs tracking-wide text-gold/60 border px-1.5 py-0.5"
                            style={{ borderColor: 'rgba(201,168,76,0.3)', fontSize: '10px' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      {beer.style && (
                        <p className="text-xs tracking-wide uppercase text-cream-dim mb-2">{beer.style}</p>
                      )}
                      {beer.description && (
                        <p className="text-cream-muted text-sm leading-relaxed max-w-2xl">{beer.description}</p>
                      )}
                    </div>
                    {beer.abv != null && (
                      <div className="flex-shrink-0 text-right">
                        <span className="text-gold font-medium">{beer.abv}%</span>
                        <p className="text-cream-dim text-xs">ABV</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        {active.length === 0 && (
          <p className="text-cream-muted text-center py-20">
            Taplist updating — check back soon or give us a call at 206-402-6025.
          </p>
        )}
      </div>
    </div>
  )
}
