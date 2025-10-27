import type { Metadata } from 'next'
import { VerificationPage } from '@/components/verification-page'

export const metadata: Metadata = {
  title: 'Verificar Carné de Egresado | SENA Regional Cauca',
  description: 'Verifica la validez y autenticidad de un carné de egresado del SENA Regional Cauca. Consulta el estado de vigencia, fecha de expiración y datos del titular.',
  keywords: [
    'verificar carné',
    'validar carné',
    'autenticidad carné',
    'SENA',
    'egresado',
    'verificación',
    'validez',
    'Regional Cauca'
  ],
  authors: [{ name: 'SENA Regional Cauca' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Verificar Carné de Egresado | SENA Regional Cauca',
    description: 'Verifica la validez y autenticidad de un carné de egresado del SENA Regional Cauca.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'SENA Regional Cauca - Sistema de Carnés',
  },
  twitter: {
    card: 'summary',
    title: 'Verificar Carné de Egresado | SENA Regional Cauca',
    description: 'Verifica la validez y autenticidad de un carné de egresado del SENA Regional Cauca.',
  },
}

interface VerifyTokenPageProps {
  params: {
    token: string
  }
}

export default function VerifyTokenPage({ params }: VerifyTokenPageProps) {
  return <VerificationPage token={params.token} />
}