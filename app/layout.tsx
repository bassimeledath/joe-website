import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import config from '../config'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: config.header.name,
  description: config.aboutMe.text,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="container mx-auto mt-8 p-4 flex-grow">
          {children}
        </main>
        <footer className="bg-gray-200 text-center p-4 mt-8">
          <p>{config.footer.note}</p>
          <p>&copy; {config.footer.copyright}</p>
        </footer>
      </body>
    </html>
  )
}

