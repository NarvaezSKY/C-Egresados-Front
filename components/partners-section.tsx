import { Card } from "@/components/ui/card"

export function PartnersSection() {
  const partnerCategories = [
    {
      title: "Empresas aliadas",
      partners: [
        { name: "ALEJAMIEL", logo: "/empresas/ALEJAMIEL.jpg" },
        { name: "AMIGA SALUD", logo: "/empresas/AMIGA SALUD.jpg" },
        { name: "CAFESOLO", logo: "/empresas/CAFESOLO.jpg" },
        { name: "CARDIOFIT", logo: "/empresas/CARDIOFIT.jpg" },
        { name: "ECOGLAMPING", logo: "/empresas/ECOGLAMPING.jpg" },
        { name: "ERIKS", logo: "/empresas/ERIKS.jpg" },
        { name: "FINCA PARAISO", logo: "/empresas/FINCA PARAISO.jpg" },
        { name: "GRUPOSURTICAMPO", logo: "/empresas/GRUPOSURTICAMPO.jpg" },
        { name: "HALOUMI", logo: "/empresas/HALOUMI.webp" },
        { name: "ORTODONCIA PARA TODOS", logo: "/empresas/ORTODONCIA PARA TODOS.jpg" },
        { name: "SOPATRI", logo: "/empresas/SOPATRI.jpg" },
        { name: "VERUTTI", logo: "/empresas/VERUTTI.jpg" },
      ],
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-3 text-3xl font-bold text-[#003876]">Nuestros Aliados</h3>
          <p className="text-gray-600">Disfruta de beneficios exclusivos con nuestras entidades aliadas</p>
        </div>

        <div className="space-y-8">
          {partnerCategories.map((category) => (
            <div key={category.title}>
              <h4 className="mb-4 text-lg font-semibold text-[#009639]">{category.title}</h4>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {category.partners.map((partner) => (
                  <Card
                    key={partner.name}
                    className="flex items-center justify-center border-2 border-gray-200 bg-white p-6 transition-all hover:border-[#39b54a] hover:shadow-md"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="rounded-md"
                      width={"150px"}
                      height={"100px"}
                    />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
