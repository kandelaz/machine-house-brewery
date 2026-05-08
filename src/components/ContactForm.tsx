'use client'

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={e => e.preventDefault()}>
      <div>
        <label className="block text-xs tracking-widest uppercase text-cream-dim mb-2">Name</label>
        <input type="text" className="w-full px-4 py-3 bg-brown-light border text-cream placeholder-cream-dim focus:outline-none focus:border-gold transition-colors"
          style={{ borderColor: 'rgba(245,240,224,0.12)' }} placeholder="Your name" />
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-cream-dim mb-2">Email</label>
        <input type="email" className="w-full px-4 py-3 bg-brown-light border text-cream placeholder-cream-dim focus:outline-none focus:border-gold transition-colors"
          style={{ borderColor: 'rgba(245,240,224,0.12)' }} placeholder="your@email.com" />
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-cream-dim mb-2">Subject</label>
        <select className="w-full px-4 py-3 bg-brown-light border text-cream focus:outline-none focus:border-gold transition-colors"
          style={{ borderColor: 'rgba(245,240,224,0.12)' }}>
          <option value="">Select a topic</option>
          <option>General Enquiry</option>
          <option>Wholesale</option>
          <option>Media / Press</option>
          <option>Cask Club</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-cream-dim mb-2">Message</label>
        <textarea rows={5} className="w-full px-4 py-3 bg-brown-light border text-cream placeholder-cream-dim focus:outline-none focus:border-gold transition-colors resize-none"
          style={{ borderColor: 'rgba(245,240,224,0.12)' }} placeholder="How can we help?" />
      </div>
      <button type="submit"
        className="w-full py-3 bg-maroon text-cream text-sm tracking-widest uppercase font-semibold hover:bg-maroon-dark transition-colors">
        Send Message
      </button>
    </form>
  )
}
