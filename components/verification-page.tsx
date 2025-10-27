"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, XCircle, Calendar, User, Hash, Clock, AlertTriangle, Loader2 } from "lucide-react"
import { useVerifyCarnet } from "@/hooks/use-verify-carnet"
import Link from "next/link"

interface VerificationPageProps {
  token: string
}

export function VerificationPage({ token }: VerificationPageProps) {
  const { isLoading, error, verificationResult, verifyCarnet } = useVerifyCarnet()

  useEffect(() => {
    if (token) {
      verifyCarnet(token)
    }
  }, [token, verifyCarnet])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-CO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[#39b54a]/5">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/sena-logo-green.png" alt="SENA Logo" className="h-12 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#39b54a]">SENA Regional Cauca</h1>
                <p className="text-xs text-muted-foreground">Verificación de Carné de Egresado</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                Ir al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Verificación de Carné</h2>
            <p className="text-muted-foreground text-lg">Resultado de la verificación del carné de egresado</p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <Card className="p-8 text-center">
              <Loader2 className="h-16 w-16 mx-auto text-[#39b54a] animate-spin mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verificando carné...</h3>
              <p className="text-muted-foreground">
                Por favor espera mientras verificamos la autenticidad del carné
              </p>
            </Card>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <Card className="p-8 text-center">
              <XCircle className="h-16 w-16 mx-auto text-destructive mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-destructive">Error en la verificación</h3>
              <Alert variant="destructive" className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
              <Button onClick={() => window.location.reload()} variant="outline">
                Intentar de nuevo
              </Button>
            </Card>
          )}

          {/* Verification Result */}
          {verificationResult && !isLoading && !error && (
            <div className="space-y-6">
              {/* Status Card */}
              <Card
                className={`p-6 border-2 ${
                  verificationResult.valid 
                    ? "border-[#39b54a] bg-[#39b54a]/5" 
                    : "border-destructive bg-destructive/5"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    verificationResult.valid ? "bg-[#39b54a]/10" : "bg-destructive/10"
                  }`}>
                    {verificationResult.valid ? (
                      <CheckCircle2 className="h-8 w-8 text-[#39b54a]" />
                    ) : (
                      <XCircle className="h-8 w-8 text-destructive" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">
                        {verificationResult.valid ? "Carné Válido" : "Carné No Válido"}
                      </h3>
                      <Badge
                        variant={verificationResult.valid ? "default" : "destructive"}
                        className={verificationResult.valid ? "bg-[#39b54a] hover:bg-[#39b54a]/90" : ""}
                      >
                        {verificationResult.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className={`text-lg ${
                      verificationResult.valid ? "text-[#39b54a]" : "text-destructive"
                    }`}>
                      {verificationResult.message}
                    </p>
                    {verificationResult.valid && 'daysRemaining' in verificationResult && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>
                          Válido por {verificationResult.daysRemaining} días más 
                          {verificationResult.expiresOn && ` (hasta el ${verificationResult.expiresOn})`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              {/* Carnet Information */}
              {verificationResult.carnet && (
                <>
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-[#39b54a]" />
                      Información del Egresado
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Nombre Completo</p>
                        <p className="font-semibold">{verificationResult.carnet.nombreCompleto}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Cédula</p>
                        <p className="font-semibold">{verificationResult.carnet.cedula}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Programa</p>
                        <p className="font-semibold">{verificationResult.carnet.programa}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Número de Ficha</p>
                        <p className="font-semibold">{verificationResult.carnet.ficha}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Dates Information */}
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-[#39b54a]" />
                      Fechas del Carné
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Fecha de Generación</p>
                        <p className="font-semibold">{formatDate(verificationResult.carnet.fechaGeneracion)}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Fecha de Vencimiento</p>
                        <p className={`font-semibold ${!verificationResult.valid ? "text-destructive" : ""}`}>
                          {formatDate(verificationResult.carnet.fechaVencimiento)}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* ID Information */}
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Hash className="h-5 w-5 text-[#39b54a]" />
                      Identificador del Carné
                    </h4>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">ID Único</p>
                      <p className="font-mono text-sm break-all bg-muted p-3 rounded-md">
                        {verificationResult.carnet.id}
                      </p>
                    </div>
                  </Card>
                </>
              )}

              {/* Warning for expired/invalid cards */}
              {!verificationResult.valid && (
                <Card className="p-6 border-2 border-amber-500 bg-amber-500/5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                        {verificationResult.status === 'expired' ? 'Carnet Vencido' : 'Carnet No Válido'}
                      </h4>
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        {verificationResult.status === 'expired' 
                          ? 'Este carnet ha expirado y ya no es válido para obtener beneficios. Por favor, genere un nuevo carnet si es elegible.'
                          : 'Este carnet no es válido o no se pudo verificar su autenticidad.'
                        }
                      </p>
                    </div>
                  </div>
                </Card>
              )}

            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SENA Regional Cauca. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}