import { CarnetGeneratorForm } from "@/components/carnet-generator-form"
import { StepsSection } from "@/components/steps-section"
import { PartnersSection } from "@/components/partners-section"
import Image from "next/image"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generar Carnet de Egresado | SENA Regional Cauca',
  description: 'Obtén tu carnet digital de egresado del SENA Regional Cauca. Accede a beneficios exclusivos con nuestros aliados.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-[#8b1d6f]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Image src="/images/sena-logo-white.png" alt="SENA Logo" width={120} height={60} className="h-16 w-auto" />
            <div className="text-right">
              <h1 className="text-xl font-bold text-white md:text-2xl">Generación de Carnet de Egresado</h1>
              <p className="text-sm text-white">SENA Regional Cauca</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#39a900] to-[#009639] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">Obtén tu Carnet de Egresado</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90 text-pretty">
            Genera tu carnet digital de egresado del SENA y accede a beneficios exclusivos con nuestros aliados
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <StepsSection />

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <CarnetGeneratorForm />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-[#003876] py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} SENA Regional Cauca. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
