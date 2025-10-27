import { CheckCircle2, FileText, Link2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function StepsSection() {
  const steps = [
    // {
    //   number: 1,
    //   icon: Link2,
    //   title: "Actualiza tus datos",
    //   description: "Actualiza tus datos en la plataforma de la Agencia Pública de Empleo.",
    //   linkText: "Ir a la plataforma",
    //   linkUrl: "https://ape.sena.edu.co/spe-web/spe/login;jsessionid=3a4Kby4vZGMX_pqIFkL2uzKH9a2YqCM5u6L5iMYlFpfA0iHq3-6_!-83691334",
    // },
    {
      number: 1,
      icon: FileText,
      title: "Contesta la encuesta",
      description: "Completa la encuesta de egresados del SENA Regional Cauca.",
      linkText: "Ir a la encuesta",
      linkUrl: "https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=gcPCyy4vk02R0VBskxas5--QZlwVX_1BvWGUcGpoGEpURFJWS1IxRk1FRjFWVjBZRlREMDVLNjdMQy4u&Token=deadaf0a699e4c0dbce5b57adf8c3015",
    },
    {
      number: 2,
      icon: CheckCircle2,
      title: "Genera tu carné",
      description: "Una vez completada la encuesta, ingresa tus datos en el formulario a continuación para generar tu carné.",
      linkText: null,
      linkUrl: null,
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="mb-8 text-center text-3xl font-bold text-[#003876]">Para generar tu carné debes:</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative overflow-hidden border-2 border-gray-100 p-6 transition-all hover:border-[#39b54a] hover:shadow-lg"
            >
              {/* Step Number Badge */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#39b54a] text-lg font-bold text-white">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#39b54a]/10">
                <step.icon className="h-6 w-6 text-[#39b54a]" />
              </div>

              {/* Content */}
              <h4 className="mb-2 text-lg font-semibold text-[#003876]">{step.title}</h4>
              <p className="mb-4 text-sm text-gray-600 text-pretty">{step.description}</p>

              {/* Link */}
              {step.linkText && (
                <a
                  href={step.linkUrl || "#"}
                  className="inline-flex items-center text-sm font-medium text-[#39b54a] hover:text-[#009639]"
                  target="_blank"
                >
                  {step.linkText}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
