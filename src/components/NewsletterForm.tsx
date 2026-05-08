'use client'

export default function NewsletterForm() {
  return (
    <form className="flex gap-2 max-w-sm mx-auto" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-4 py-2 text-sm bg-brown border text-cream placeholder-cream-dim focus:outline-none focus:border-gold"
        style={{ borderColor: 'rgba(245,240,224,0.15)' }}
      />
      <button
        type="submit"
        className="px-5 py-2 text-xs tracking-widest uppercase font-semibold bg-maroon text-cream hover:bg-maroon-dark transition-colors"
      >
        Join
      </button>
    </form>
  )
}
