"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
import { MessageCircle, HelpCircle, Search, FileQuestion, ChevronRight, ArrowLeft, ExternalLink, Phone, Mail, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

type View = "menu" | "no-encontrado" | "fecha-certificacion" | "no-encuesta" | "ayuda-personalizada"

function ContactCard({ title, description }: { title: string; description: string }) {
  const [copiedPhone, setCopiedPhone] = React.useState(false)
  const [copiedEmail, setCopiedEmail] = React.useState(false)

  async function copyToClipboard(text: string, type: "phone" | "email") {
    await navigator.clipboard.writeText(text)
    if (type === "phone") {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    } else {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-hidden rounded-lg border border-amber-200 bg-amber-50 p-4">
        <h4 className="mb-2 font-semibold text-amber-900">{title}</h4>
        <p className="mb-3 text-sm text-amber-800">{description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 rounded-md bg-white p-3 text-[#003876] shadow-sm">
            <a
              href="https://api.whatsapp.com/send?phone=573128138165"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-1 transition-colors hover:text-[#39b54a]"
            >
              <Phone className="h-4 w-4 flex-shrink-0 text-[#39b54a]" />
              <span className="break-all text-xs sm:text-sm">
                <strong>Teléfono / WhatsApp:</strong> 3128138165
              </span>
              <ExternalLink className="h-3 w-3 flex-shrink-0 text-gray-400 sm:ml-auto" />
            </a>
            <button
              type="button"
              onClick={() => copyToClipboard("3128138165", "phone")}
              className="flex-shrink-0 flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-500 transition-colors hover:bg-[#39b54a]/10 hover:text-[#39b54a]"
              title="Copiar número"
            >
              {copiedPhone ? <span className="text-[#39b54a]">Copiado</span> : <Copy className="h-4 w-4" />}
            </button>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-white p-3 text-[#003876] shadow-sm">
            <a
              href="mailto:egresadosregcauca@sena.edu.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-1 transition-colors hover:text-[#39b54a]"
            >
              <Mail className="h-4 w-4 flex-shrink-0 text-[#39b54a]" />
              <span className="break-all text-xs sm:text-sm">
                <strong>Correo:</strong> egresadosregcauca@sena.edu.co
              </span>
              <ExternalLink className="h-3 w-3 flex-shrink-0 text-gray-400 sm:ml-auto" />
            </a>
            <button
              type="button"
              onClick={() => copyToClipboard("egresadosregcauca@sena.edu.co", "email")}
              className="flex-shrink-0 flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-500 transition-colors hover:bg-[#39b54a]/10 hover:text-[#39b54a]"
              title="Copiar correo"
            >
              {copiedEmail ? <span className="text-[#39b54a]">Copiado</span> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500">
        Trabajamos para que puedas generar tu carné lo más pronto posible. El equipo de soporte está atento para solucionar cualquier problema presentado con la generación de carnés.
      </p>
    </div>
  )
}

function AssistantContent({ view, onNavigate, encuestaUrl }: { view: View; onNavigate: (v: View) => void; encuestaUrl?: string }) {
  if (view === "no-encontrado") {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => onNavigate("menu")}
          className="inline-flex items-center gap-1 text-sm text-[#39b54a] hover:text-[#009639]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </button>
        <ContactCard
          title="Carné no encontrado"
          description="Por favor, indícanos a los siguientes medios tu nombre completo, número de identificación, tu programa y fecha de certificación:"
        />
      </div>
    )
  }

  if (view === "ayuda-personalizada") {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => onNavigate("menu")}
          className="inline-flex items-center gap-1 text-sm text-[#39b54a] hover:text-[#009639]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </button>
        <ContactCard
          title="Necesitas ayuda personalizada"
          description="Puedes contactar a nuestro equipo de soporte de egresados a través de los siguientes medios:"
        />
      </div>
    )
  }

  if (view === "fecha-certificacion") {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => onNavigate("menu")}
          className="inline-flex items-center gap-1 text-sm text-[#39b54a] hover:text-[#009639]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </button>

        <div className="rounded-lg border border-[#39b54a]/20 bg-[#39b54a]/5 p-4">
          <h4 className="mb-2 font-semibold text-[#003876]">¿Cómo veo en qué fecha me certifiqué?</h4>
          <ol className="list-inside list-decimal space-y-2 text-sm text-gray-700">
            <li>
              Ingresa al portal{" "}
              <a
                href="https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#39b54a] underline hover:text-[#009639]"
              >
                certificados.sena.edu.co
              </a>
            </li>
            <li>Ingresa tu número de identificación</li>
            <li>Completa el captcha de verificación</li>
            <li>Revisa la fecha que aparece en cada uno de tus certificados</li>
          </ol>
        </div>
      </div>
    )
  }

  if (view === "no-encuesta") {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => onNavigate("menu")}
          className="inline-flex items-center gap-1 text-sm text-[#39b54a] hover:text-[#009639]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </button>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <h4 className="mb-2 font-semibold text-amber-900">El egresado no ha contestado la encuesta</h4>
          <p className="mb-3 text-sm text-amber-800">
            <strong>Paso 1:</strong> Contesta la encuesta de egresados del SENA Regional Cauca.
          </p>
          <p className="mb-4 text-sm text-amber-800">
            <strong>Importante:</strong> Sin completar la encuesta no podrás generar tu carné de egresado.
          </p>
          <a
            href={encuestaUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#39b54a] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#009639]"
          >
            Ir a la encuesta
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => onNavigate("no-encontrado")}
        className="flex w-full items-center gap-3 rounded-lg border border-gray-200 p-3 text-left text-sm text-gray-700 shadow-xs transition-all hover:border-[#39b54a] hover:bg-[#39b54a]/5 hover:text-[#003876]"
      >
        <FileQuestion className="h-5 w-5 flex-shrink-0 text-[#39b54a]" />
        <span className="flex-1 font-medium">"Carné no encontrado"</span>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate("fecha-certificacion")}
        className="flex w-full items-center gap-3 rounded-lg border border-gray-200 p-3 text-left text-sm text-gray-700 shadow-xs transition-all hover:border-[#39b54a] hover:bg-[#39b54a]/5 hover:text-[#003876]"
      >
        <Search className="h-5 w-5 flex-shrink-0 text-[#39b54a]" />
        <span className="flex-1 font-medium">¿Cómo veo en qué fecha me certifiqué?</span>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate("no-encuesta")}
        className="flex w-full items-center gap-3 rounded-lg border border-gray-200 p-3 text-left text-sm text-gray-700 shadow-xs transition-all hover:border-[#39b54a] hover:bg-[#39b54a]/5 hover:text-[#003876]"
      >
        <HelpCircle className="h-5 w-5 flex-shrink-0 text-[#39b54a]" />
        <span className="flex-1 font-medium">"El egresado no ha contestado la encuesta"</span>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate("ayuda-personalizada")}
        className="flex w-full items-center gap-3 rounded-lg border border-gray-200 p-3 text-left text-sm text-gray-700 shadow-xs transition-all hover:border-[#39b54a] hover:bg-[#39b54a]/5 hover:text-[#003876]"
      >
        <Phone className="h-5 w-5 flex-shrink-0 text-[#39b54a]" />
        <span className="flex-1 font-medium">Necesitas ayuda personalizada</span>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </button>
    </div>
  )
}

export function AssistantButton({ encuestaUrl }: { encuestaUrl?: string }) {
  const [open, setOpen] = React.useState(false)
  const [view, setView] = React.useState<View>("menu")

  function handleOpenChange(val: boolean) {
    setOpen(val)
    if (!val) {
      setView("menu")
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* Floating trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#8b1d6f]/90 px-5 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-[#6d1658] hover:shadow-xl",
          "max-sm:bottom-4 max-sm:right-4 max-sm:px-4 max-sm:py-2.5 max-sm:text-xs cursor-pointer",
        )}
      >
        <MessageCircle className="h-5 w-5 flex-shrink-0" />
        <span className="hidden sm:inline cursor-pointer">¿Tienes problemas generando tu carné? <span className="underline">¡Haz clic aquí!</span></span>
        <span className="sm:hidden">¿Problemas con tu carné?</span>
      </button>

      <DialogContent className="sm:max-w-md" showCloseButton>
        <DialogHeader>
          <DialogTitle className="text-[#003876]">Asistente de Carné de Egresado</DialogTitle>
          <DialogDescription>
            {view === "menu"
              ? "Selecciona una opción según tu problema:"
              : "Información detallada para resolver tu inconveniente"}
          </DialogDescription>
        </DialogHeader>

        <AssistantContent view={view} onNavigate={setView} encuestaUrl={encuestaUrl} />
      </DialogContent>
    </Dialog>
  )
}
