import { CheckCircle2, FileText, Link2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { ENCUESTA_URL } from "@/lib/api/config";

export function StepsSection() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Contesta la encuesta",
      description: (
        <>
          Completa la <strong className="font-semibold">encuesta de egresados del SENA Regional Cauca </strong> para poder generar tu carné. Según la <strong className="font-semibold">Resolución 1229 de 2018 del SENA</strong>, se considera <strong className="font-semibold">egresado</strong> a la persona que ha aprobado todo su proceso de formación, cumplido los requisitos académicos y administrativos exigidos por la institución, y obtenido el título o certificado correspondiente en programas de formación titulada <strong className="font-semibold">(Operario, Auxiliar, Técnico, Tecnólogo o Especialización Tecnológica)</strong>
        </>
      ),
      linkText: "Ir a la encuesta",
      linkUrl: ENCUESTA_URL,
    },
    {
      number: 2,
      icon: CheckCircle2,
      title: "Si ya completaste la encuesta...",
      description: (
        <>
          En el <strong className="font-semibold">paso 3</strong>, ingresa tu número de cédula para generar tu carné digital.
        </>
      ),
      linkText: null,
      linkUrl: null,
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="mb-8 text-center text-3xl font-bold text-[#003876]">
          Para generar tu carné debes:
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative overflow-hidden border-2 border-gray-100 p-6 transition-all hover:border-[#39b54a] hover:shadow-lg"
            >
              {/* Step Number Badge */}
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#39b54a] text-lg font-bold text-white shadow-lg transition-all hover:scale-110 hover:bg-[#009639] hover:shadow-xl"
                  >
                    {step.number}
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  className="z-50 w-64 rounded-lg border-2 border-[#39b54a] bg-white p-4 shadow-xl"
                  sideOffset={5}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#39b54a]">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-[#003876]">
                      Este es el paso {step.number}
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#39b54a]/10">
                <step.icon className="h-6 w-6 text-[#39b54a]" />
              </div>

              {/* Content */}
              <h4 className="mb-2 text-lg font-semibold text-[#003876]">
                {step.title}
              </h4>
              <p className="mb-4 text-sm text-gray-600 text-pretty">
                {step.description}
              </p>

              {/* Link */}
              {step.linkText && (
                <a
                  href={step.linkUrl || "#"}
                  className="inline-flex items-center text-sm font-medium text-[#39b54a] hover:text-[#009639]"
                  target="_blank"
                >
                  {step.linkText}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
