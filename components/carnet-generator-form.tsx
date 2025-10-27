"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CreditCard, AlertCircle, CheckCircle2, Download } from "lucide-react"
import { useCarnet } from "@/hooks/use-carnet"
import ReCAPTCHA from "react-google-recaptcha"

export function CarnetGeneratorForm() {
  const [cedula, setCedula] = useState("")
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const { isLoading, error, success, downloadCarnet, clearError } = useCarnet()

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
    if (error) clearError()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!cedula.trim()) {
      return
    }

    if (!recaptchaToken) {
      // Aquí podrías mostrar un error específico para reCAPTCHA
      return
    }

    await downloadCarnet(cedula.trim(), recaptchaToken)
    
    // Reset reCAPTCHA después del envío
    if (recaptchaRef.current) {
      recaptchaRef.current.reset()
      setRecaptchaToken(null)
    }
  }

  return (
    <Card className="border-2 border-gray-100 p-8 shadow-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#39b54a]">
          <CreditCard className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#003876]">Ingresa tus datos</h3>
          <p className="text-sm text-gray-600">Completa el formulario para generar tu carné</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cédula Field */}
        <div className="space-y-2">
          <Label htmlFor="cedula" className="text-sm font-medium text-gray-700">
            Número de Cédula
          </Label>
          <Input
            id="cedula"
            type="text"
            placeholder="Ej: 1234567890"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
            className="h-12 border-2 border-gray-200 focus:border-[#39b54a] focus:ring-[#39b54a]"
          />
        </div>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Success Alert */}
        {success && (
          <Alert className="border-green-200 bg-green-50 text-green-800">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription>
              ¡Carné descargado exitosamente!
            </AlertDescription>
          </Alert>
        )}

        {/* reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={handleRecaptchaChange}
            onExpired={() => setRecaptchaToken(null)}
            onError={() => setRecaptchaToken(null)}
            theme="light"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading || !recaptchaToken}
          className="h-12 w-full bg-[#39b54a] text-base font-semibold text-white hover:bg-[#009639] disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Generando...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Descargar Carné
            </span>
          )}
        </Button>

        {/* reCAPTCHA validation message */}
        {!recaptchaToken && (
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Complete la verificación reCAPTCHA para continuar
            </p>
          </div>
        )}

        {/* Validity Notice */}
        <div className="rounded-lg bg-[#fdb913]/10 p-4">
          <p className="text-center text-sm text-[#003876]">
            <span className="font-semibold">Nota:</span> Este carné será válido por{" "}
            <span className="font-bold">X meses</span>
          </p>
        </div>
      </form>
    </Card>
  )
}
