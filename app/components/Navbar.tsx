'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import config from '../../config'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { name: 'About', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Publications', href: '/publications' },
  { name: 'Education', href: '/education' },
  { name: 'Teaching', href: '/teaching' },
  { name: 'Presentations', href: '/presentations' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-black">{config.header.name}</h1>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded ${
                      pathname === item.href ? 'bg-blue-50 text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded ${
                      pathname === item.href ? 'bg-blue-50 text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
