import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Machine House Brewery.',
}

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">Say Hello</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-4">Contact</h1>
        <p className="text-cream-muted mb-12 leading-relaxed">
          For general enquiries, wholesale, or media — drop us a line below.
          For private event bookings, use the <a href="/private-events" className="text-gold hover:text-cream transition-colors underline underline-offset-4">Private Events page</a>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />

          {/* Direct info */}
          <div>
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-3">Phone</p>
                <a href="tel:+12064026025" className="text-cream hover:text-gold transition-colors">206-402-6025</a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-3">Address</p>
                <address className="not-italic text-cream-muted leading-relaxed">
                  5718 Rainier Ave S<br />Seattle, WA 98118
                </address>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-3">Social</p>
                <div className="space-y-2">
                  <a href="https://www.instagram.com/machinehousebrewery" target="_blank" rel="noopener noreferrer"
                    className="block text-cream-muted hover:text-cream transition-colors text-sm">Instagram</a>
                  <a href="https://www.facebook.com/machinehousebrewery" target="_blank" rel="noopener noreferrer"
                    className="block text-cream-muted hover:text-cream transition-colors text-sm">Facebook</a>
                  <a href="https://untappd.com/MachinehouseBrewery" target="_blank" rel="noopener noreferrer"
                    className="block text-cream-muted hover:text-cream transition-colors text-sm">Untappd</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
