'use client'

export default function PrivateEventForm() {
  return (
    <form className="space-y-5" onSubmit={e => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-widests uppercase text-cream-dim mb-2">Name</label>
          <input type="text" className="w-full px-4 py-3 bg-brown-light border text-cream placeholder-cream-dim focus:outline-none focus:border-gold transition-colors"
            style={{ borderColor: 'rgba(245,240,224,0.12)' }} />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-cream-dim mb-2">Email</label>
          <input type="email" className="w-full px-4 py-3 bg-brown-light border text-cream placeholder-cream-dim focus:outline-none focus:border-gold transition-colors"
            style={{ borderColor: 'rgba(245,240,224,0.12)' }} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-widest uppercase text-cream-dim mb-2">Preferred Date</label>
          <input type="date" className="w-full px-4 py-3 bg-brown-light border text-cream focus:outline-none focus:border-gold transition-colors"
            style={{ borderColor: 'rgba(245,240,224,0.12)' }} />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-cream-dim mb-2">Expected Guest Count</label>
          <select className="w-full px-4 py-3 bg-brown-light border text-cream focus:outline-none focus:border-gold transition-colors"
            style={{ borderColor: 'rgba(245,240,224,0.12)' }}>
            <option>Under 20</option>
            <option>20 – 40</option>
            <option>40 – 60</option>
            <option>60 – 80</option>
            <option>80+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-cream-dim mb-2">Type of Event</label>
        <select className="w-full px-4 py-3 bg-brown-light border text-cream focus:outline-none focus:border-gold transition-colors"
          style={{ borderColor: 'rgba(245,240,224,0.12)' }}>
          <option>Birthday / Celebration</option>
          <option>Corporate / Team Event</option>
          <option>Community / Non-Profit</option>
          <option>Wedding Reception</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-cream-dim mb-2">Additional Details</label>
        <textarea rows={4} className="w-full px-4 py-3 bg-brown-light border text-cream placeholder-cream-dim focus:outline-none focus:border-gold transition-colors resize-none"
          style={{ borderColor: 'rgba(245,240,224,0.12)' }}
          placeholder="Tell us about your event, any special requirements, catering plans..." />
      </div>
      <button type="submit"
        className="w-full py-3 bg-maroon text-cream text-sm tracking-widest uppercase font-semibold hover:bg-maroon-dark transition-colors">
        Submit Enquiry
      </button>
    </form>
  )
}
