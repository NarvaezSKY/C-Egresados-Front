import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Carné de Egresado SENA - Regional Cauca',
  description: 'Genera tu carné digital de egresado del SENA y accede a beneficios exclusivos con nuestros aliados',
  generator: 'SENA Regional Cauca',
  keywords: ['SENA', 'Carné', 'Egresado', 'Regional Cauca', 'Educación'],
  authors: [{ name: 'SENA Regional Cauca' }],
  icons: {
    icon: '/images/sena-logo-green.png',
    shortcut: '/images/sena-logo-green.png',
    apple: '/images/sena-logo-green.png',
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
