import type { Metadata } from 'next'
import PrivateEventForm from '@/components/PrivateEventForm'

export const metadata: Metadata = {
  title: 'Private Events & Space Rental',
  description: 'Book Machine House Brewery for your private event — birthdays, corporate gatherings, and community meetups.',
}

export default function PrivateEventsPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">Book the Taproom</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream font-medium mb-4">Private Events</h1>
        <p className="text-cream-muted mb-16 max-w-xl leading-relaxed text-[17px]">
          Machine House Brewery is available for private hire. Whether it's a birthday, corporate gathering, or neighbourhood meetup — bring your people and we'll supply the pints.
        </p>

        {/* What's included */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-20">
          {[
            { title: 'Full Taproom Access', desc: 'Exclusive use of our space for your group.' },
            { title: 'Hand-Pump Service', desc: 'Full cask ale taplist served traditionally.' },
            { title: 'Flexible Capacity', desc: 'Comfortable for groups of 20 to 80+ guests.' },
            { title: 'Outside Food Welcome', desc: 'Bring your own catering or order from our food partners.' },
            { title: 'AV Setup Available', desc: 'Screen and sound system for presentations or film.' },
            { title: 'Community Pricing', desc: 'Local non-profits and community groups receive special rates.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-6 border" style={{ borderColor: 'rgba(245,240,224,0.08)', backgroundColor: '#2a1a0c' }}>
              <h3 className="text-cream font-medium mb-2">{title}</h3>
              <p className="text-cream-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Booking form */}
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl text-cream mb-8">Enquire About Your Event</h2>
          <PrivateEventForm />
        </div>
      </div>
    </div>
  )
}
