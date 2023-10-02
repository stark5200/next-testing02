import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className='py-6'>
        <nav className='container'>
          <ul className='flex gap-6'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/slides">Slides</Link>
            </li>
            <li>
              <Link href="/thumbnails">Thumbnails</Link>
            </li>
            <li>
              <Link href="/controlled">Controlled</Link>
            </li>
          </ul>
        </nav>
      </header>

        <main>{children}</main>
      </body>
    </html>
  )
}
