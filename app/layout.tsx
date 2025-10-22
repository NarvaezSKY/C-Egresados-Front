import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Carnet de Egresado SENA - Regional Cauca',
  description: 'Genera tu carnet digital de egresado del SENA y accede a beneficios exclusivos con nuestros aliados',
  generator: 'SENA Regional Cauca',
  keywords: ['SENA', 'Carnet', 'Egresado', 'Regional Cauca', 'Educación'],
  authors: [{ name: 'SENA Regional Cauca' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
