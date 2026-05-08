'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { SiteSettings } from '@/sanity/queries'

const baseLinks = [
  { href: '/beer',           label: 'Beer' },
  { href: '/taproom',        label: 'Taproom' },
  { href: '/calendar',       label: 'Events' },
  { href: '/food',           label: 'Food' },
  { href: '/about',          label: 'About' },
]

export default function Navbar({ settings }: { settings: SiteSettings | null }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isHome = pathname === '/'
  const hasBg = scrolled || !isHome

  const links = [
    ...baseLinks,
    ...(settings?.arsenalNavActive ? [{ href: '/arsenal', label: '⚽ Arsenal' }] : []),
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: hasBg ? 'rgba(28,16,8,0.97)' : 'transparent',
        backdropFilter: hasBg ? 'blur(12px)' : 'none',
        borderBottom: hasBg ? '1px solid rgba(245,240,224,0.07)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <span className="font-serif text-xl font-semibold tracking-wide text-cream">
            Machine House
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2 text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: pathname.startsWith(href) ? '#c9a84c' : 'rgba(245,240,224,0.7)' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/cask-club"
            className="ml-4 px-5 py-2 text-xs tracking-widest uppercase font-semibold border transition-colors duration-200"
            style={{
              borderColor: '#c9a84c',
              color: '#c9a84c',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#c9a84c'
              ;(e.currentTarget as HTMLElement).style.color = '#1c1008'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              ;(e.currentTarget as HTMLElement).style.color = '#c9a84c'
            }}
          >
            Cask Club
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-3 -mr-3"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="block w-6 h-px bg-cream/80 transition-transform duration-300 origin-center"
            style={{ transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span className="block w-6 h-px bg-cream/80 transition-all duration-300"
            style={{ opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }} />
          <span className="block w-6 h-px bg-cream/80 transition-transform duration-300 origin-center"
            style={{ transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '480px' : '0',
          opacity: open ? 1 : 0,
          borderTop: open ? '1px solid rgba(245,240,224,0.07)' : 'none',
        }}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col bg-brown/97">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="py-4 text-sm tracking-widest uppercase border-b"
              style={{
                color: pathname.startsWith(href) ? '#c9a84c' : 'rgba(245,240,224,0.7)',
                borderColor: 'rgba(245,240,224,0.07)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/cask-club"
            className="mt-4 py-3 text-sm tracking-widest uppercase font-semibold text-center border"
            style={{ borderColor: '#c9a84c', color: '#c9a84c' }}
          >
            Cask Club
          </Link>
        </div>
      </div>
    </header>
  )
}
