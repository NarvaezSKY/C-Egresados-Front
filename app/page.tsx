import { CarnetGeneratorForm } from "@/components/carnet-generator-form"
import { StepsSection } from "@/components/steps-section"
import { PartnersSection } from "@/components/partners-section"
import Image from "next/image"
import type { Metadata } from 'next'
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: 'Generar Carné de Egresado | SENA Regional Cauca',
  description: 'Obtén tu carné digital de egresado del SENA Regional Cauca. Accede a beneficios exclusivos con nuestros aliados.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-[#8b1d6f]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-1">
              <Image src="/images/sena-logo-white.png" alt="SENA Logo" width={95} height={95} />
              <span className="text-center text-sm font-black text-white/90">Regional Cauca</span>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-white md:text-2xl">Generación de Carné de Egresado</h1>
              <p className="text-sm text-white">SENA Regional Cauca</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#39a900] to-[#009639] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">Obtén tu Carné de Egresado</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90 text-pretty">
            Genera tu carné digital de egresado del <span className="font-bold">SENA Regional Cauca</span> y accede a beneficios exclusivos con nuestros aliados
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
      <footer className="border-t border-gray-200 bg-[#003876] py-8 text-white grid grid-cols-1 md:grid-cols-3">
        <div className="mx-auto my-auto flex flex-col items-center gap-1 md:py-0">
          <Image src="/images/sena-logo-white.png" alt="SENA Logo" width={95} height={95} />
          <span className="text-center text-sm font-black text-white/90">Regional Cauca</span>
        </div>
        <div className="container mx-auto px-4 text-center space-y-1.5">
          <h3 className="text-2xl font-bold">Contáctanos:</h3>
          <Separator orientation="horizontal" className="my-2 bg-white/70" />
          <p className="text-sm">Consulta tus certificaciones como egresado SENA aquí: <a href="https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer" className="underline" target="_blank" rel="noopener noreferrer">certificados.sena.edu.co</a></p>
          <p className="text-sm">¿Tienes problemas generando tu carné de egresado? ¿Tienes alguna sugerencia o duda con los beneficios? Puedes contactárnos a través de los canales:</p>
          <p className="text-sm"> Teléfono WhsatsApp: <a href="https://api.whatsapp.com/send?phone=573143084146" className="underline" target="_blank" rel="noopener noreferrer">3143084146</a>
          </p>
          <p className="text-sm">Correo: <a href="mailto:egresadosregcauca@sena.edu.co" className="underline" target="_blank" rel="noopener noreferrer">egresadosregcauca@sena.edu.co</a></p>
          <p className="text-sm">© {new Date().getFullYear()} <b className="font-semibold">SENA Regional Cauca</b>. Todos los derechos reservados.</p>
        </div>
          <Image src="/images/LOGOCMR.png" alt="SENA Logo" width={125} height={125} className="mx-auto my-auto md:py-0" />
      </footer>
    </div>
  )
}
