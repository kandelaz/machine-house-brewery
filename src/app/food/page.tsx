import type { Metadata } from 'next'
import { getFoodPartners } from '@/sanity/queries'

export const metadata: Metadata = {
  title: 'Neighborhood Food',
  description: 'Outside food is always welcome at Machine House. Here are our favourite Hillman City delivery partners.',
}

const STATIC_PARTNERS = [
  { name: 'Hillman City Collaboratory', cuisine: 'Community Kitchen', description: 'A community space with rotating food vendors just down the block.', phone: '', website: '' },
  { name: 'Tammy\'s Food Cart', cuisine: 'Filipino', description: 'Beloved neighborhood staple. Ask for the adobo.', phone: '', website: '' },
  { name: 'La Cabañita', cuisine: 'Mexican', description: 'Family-run with incredible tamales and delivery up and down Rainier.', phone: '', website: '' },
]

export default async function FoodPage() {
  const sanityPartners = await getFoodPartners()
  const partners = sanityPartners.length > 0 ? sanityPartners : STATIC_PARTNERS

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">Hillman City</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-4">Neighborhood Food</h1>
        <p className="text-cream-muted mb-4 max-w-xl leading-relaxed text-[17px]">
          Outside food is always welcome at Machine House. Stay longer, eat well, drink better. These are our favourite local spots that deliver right to the taproom.
        </p>
        <p className="text-cream-dim text-sm mb-16">📍 Tell them you're at Machine House Brewery, 5718 Rainier Ave S.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-16">
          {partners.map((p) => (
            <div key={p.name} className="p-6 border group" style={{ borderColor: 'rgba(245,240,224,0.08)', backgroundColor: '#2a1a0c' }}>
              <p className="text-xs tracking-widest uppercase text-gold mb-3">{p.cuisine}</p>
              <h3 className="text-cream font-medium text-lg mb-2">{p.name}</h3>
              <p className="text-cream-muted text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex gap-3">
                {'phone' in p && p.phone && (
                  <a href={`tel:${p.phone}`} className="text-xs tracking-widest uppercase text-cream-dim hover:text-cream transition-colors">Call</a>
                )}
                {'website' in p && p.website && (
                  <a href={p.website} target="_blank" rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase text-cream-dim hover:text-cream transition-colors">
                    Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 border-l-2 text-cream-muted"
          style={{ borderColor: '#c9a84c', backgroundColor: '#2a1a0c' }}>
          <p className="text-sm leading-relaxed">
            <strong className="text-cream">Know a great spot?</strong> If you're a Hillman City food business that delivers and would like to be listed here, <a href="/contact" className="text-gold underline underline-offset-4 hover:text-cream transition-colors">get in touch</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
