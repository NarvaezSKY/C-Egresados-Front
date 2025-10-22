import { Card } from "@/components/ui/card"

export function PartnersSection() {
  const partnerCategories = [
    {
      title: "Universidades",
      partners: [
        { name: "Universidad del Cauca", logo: "/universidad-cauca-logo.jpg" },
        { name: "Universidad Cooperativa", logo: "/universidad-cooperativa-logo.jpg" },
        { name: "UNAD", logo: "/unad-logo.jpg" },
      ],
    },
    {
      title: "Almacenes de Cadena",
      partners: [
        { name: "Éxito", logo: "/exito-store-logo.jpg" },
        { name: "Falabella", logo: "/falabella-logo.jpg" },
        { name: "Alkosto", logo: "/alkosto-logo.jpg" },
      ],
    },
    {
      title: "Restaurantes",
      partners: [
        { name: "Restaurante 1", logo: "/restaurant-logo.png" },
        { name: "Restaurante 2", logo: "/restaurant-logo-2.png" },
        { name: "Restaurante 3", logo: "/restaurant-logo-3.png" },
      ],
    },
    {
      title: "Otras Entidades",
      partners: [
        { name: "Entidad 1", logo: "/generic-company-logo.png" },
        { name: "Entidad 2", logo: "/abstract-logo-geometric.png" },
        { name: "Entidad 3", logo: "/abstract-logo-design-3.png" },
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
                      className="h-16 w-auto object-contain grayscale transition-all hover:grayscale-0"
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
