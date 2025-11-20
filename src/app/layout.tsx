import type { Metadata } from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Middle East PropTech Innovation Summit 2023',
  description: 'Embracing PropTech to Drive Innovation in Real Estate | 23-24 May 2023, Dubai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white gradient-bg min-h-screen`}>
        {children}
      </body>
    </html>
  )
}