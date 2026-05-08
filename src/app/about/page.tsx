import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story of Machine House Brewery — traditional British cask ales in Hillman City, Seattle.',
}

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">Our Story</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-12">About Machine House</h1>

        <div className="space-y-6 text-cream-muted leading-relaxed text-[17px]">
          <p>
            Machine House Brewery was born from a belief that good beer should be balanced, drinkable, and shared in good company. We brew British-style session ales — the kind designed not for novelty, but for the long conversation, the second pint, the neighborhood pub.
          </p>
          <p>
            After a decade in Georgetown, we moved our home to Hillman City on Rainier Ave S — a part of Seattle that embodies exactly the kind of community we set out to build around. Our new taproom was designed as a cornerstone for the South End: welcoming to families, neighbors, and anyone who appreciates a well-pulled pint.
          </p>
          <p>
            At the heart of what we do is the cask. Real Ale — naturally carbonated in the cask, served at cellar temperature from a hand-pump — is a dying art in the US, and we're determined to keep it alive in Seattle. When you order a pint at Machine House, you're drinking something that follows a thousand-year tradition.
          </p>
          <p>
            Our flagship ales — the Dark Mild, Best Bitter, and Golden Ale — are always on the hand-pump. Around them, we rotate seasonal specials, collaborations, and the occasional wild experiment. But everything we make is built on the same principles: balance, drinkability, and respect for the ingredients.
          </p>
        </div>

        <div className="mt-16 p-8 border-l-2" style={{ borderColor: '#c9a84c', backgroundColor: '#2a1a0c' }}>
          <p className="font-serif text-xl text-cream leading-relaxed italic">
            "Tradition You Can Taste. Community You Can Lean On."
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: '3', label: 'Flagship Ales Always on Cask' },
            { stat: '10+', label: 'Years Brewing in Seattle' },
            { stat: 'Hillman City', label: 'Home Since the Move South' },
          ].map(({ stat, label }) => (
            <div key={label} className="p-6 border" style={{ borderColor: 'rgba(245,240,224,0.08)' }}>
              <p className="font-serif text-3xl text-gold mb-2">{stat}</p>
              <p className="text-cream-muted text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/beer"
            className="px-6 py-3 bg-maroon text-cream text-sm tracking-widest uppercase font-semibold hover:bg-maroon-dark transition-colors">
            See the Taplist
          </Link>
          <Link href="/contact"
            className="px-6 py-3 border text-cream text-sm tracking-widest uppercase font-semibold hover:border-gold hover:text-gold transition-colors"
            style={{ borderColor: 'rgba(245,240,224,0.2)' }}>
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
