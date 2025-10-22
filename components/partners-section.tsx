import { Card } from "@/components/ui/card"

export function PartnersSection() {
  const partnerCategories = [
    {
      title: "Instituciones de Educación Superior",
      partners: [
        { name: "Fundación Universitaria de Popayán", logo: "/LOGOS_IES/Logo FUP_Mesa de trabajo 1 copia.png" },
        { name: "Universidad Cooperativa de Colombia", logo: "/LOGOS_IES/logo_UNiversidad Cooperativa_2018(CURVAS)-01.png" },
        { name: "Universidad Nacional Abierta y a Distancia - UNAD", logo: "/LOGOS_IES/Logo UNAD.jpeg" },
        { name: "Corporación Universitaria Iberoamericana", logo: "/LOGOS_IES/Logo Ibero.jpeg" },
        { name: "Politécnico Grancolombiano", logo: "/LOGOS_IES/Logo Politécnico.jpeg" },
        { name: "Universidad Autónoma del Cauca", logo: "/LOGOS_IES/Logo Uniautónoma para fondos blancos.png" },
        { name: "Universidad Mariana", logo: "/LOGOS_IES/Logo Unimayo.png" },
        { name: "Universidad Internacional de La Rioja", logo: "/LOGOS_IES/Logo UNIR.jpeg" },
        { name: "Universidad de Comfacauca", logo: "/LOGOS_IES/Logo Unicomfacauca_Mesa de trabajo 1 copia.png" },
        { name: "Armada de Colombia", logo: "/LOGOS_IES/logo Aramda de Colombia.jpeg" },
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
