'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import config from '../../config'

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

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-black">{config.header.name}</h1>
          <nav>
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
      </div>
    </header>
  )
}

