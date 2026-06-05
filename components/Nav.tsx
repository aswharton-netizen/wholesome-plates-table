'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Chefs', href: '#team' },
    { label: 'Menu', href: '#menu' },
    { label: 'Book', href: '#book' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-shadow"
        style={{ backgroundColor: '#1C3A2A', boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.25)' : 'none' }}>
        <a href="#" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D4A843', textDecoration: 'none' }}>
          Wholesome Plates Table
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.78rem', letterSpacing: '0.06em', color: 'rgba(200,221,211,0.8)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D4A843')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,221,211,0.8)')}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a href="#book" className="hidden md:inline-block"
            style={{ backgroundColor: '#B8892A', color: '#FAF6EE', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '10px 22px', textDecoration: 'none', transition: 'background-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#D4A843')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#B8892A')}>
            Book a Session
          </a>
          <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span style={{ display: 'block', width: 22, height: 2, backgroundColor: '#D4A843', transition: 'transform 0.25s, opacity 0.25s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, backgroundColor: '#D4A843', transition: 'transform 0.25s, opacity 0.25s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, backgroundColor: '#D4A843', transition: 'transform 0.25s, opacity 0.25s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(28,58,42,0.99)' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', letterSpacing: '0.06em', color: 'rgba(200,221,211,0.85)', textDecoration: 'none', padding: '12px 0' }}>
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 24, backgroundColor: '#B8892A', color: '#FAF6EE', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 36px', textDecoration: 'none' }}>
            Book a Session
          </a>
        </div>
      )}
    </>
  )
}
