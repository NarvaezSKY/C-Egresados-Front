import { Card } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ExternalLink, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PartnersSection() {
  const partnerCategories = [
    {
      title: "Empresas aliadas",
      partners: [
        { name: "CAFESOLO", type: "Restaurante/Cafetería", logo: "/empresas/CAFESOLO.jpg", benefits: "20% de descuento en horario de la mañana y 10% en horario de la tarde - noche", url: "https://www.facebook.com/SoloCafeSolo/" },

        { name: "HALOUMI", type: "Restaurante", logo: "/empresas/HALOUMI.png", benefits: "10% de descuento de Lunes a Jueves", url: "https://www.instagram.com/haloumiburger0/" },

        { name: "ALEJAMIEL", type: "Alimentos", logo: "/empresas/ALEJAMIEL.jpg", benefits: "15% de descuento", url: "https://api.whatsapp.com/send?phone=573126015798" },

        { name: "SOPATRI", type: "Tienda de Ropa", logo: "/empresas/SOPATRI.jpg", benefits: "10% de descuento", url: "https://www.instagram.com/sopatri_tienda_de_ropa/" },

        { name: "CONFECCIONES ERIKS", type: "Confecciones", logo: "/empresas/ERIKS.jpg", benefits: "10% de descuento", url: "https://www.tiktok.com/@confeccioneseriks" },

        { name: "AMIGA SALUD", type: "Droguería", logo: "/empresas/AMIGA SALUD.jpg", benefits: "5% de descuento", url: "https://www.facebook.com/DrogueriaAmigaSalud/" },

        { name: "VERUTTI", type: "Centro Clínico", logo: "/empresas/VERUTTI.jpg", benefits: "Cuenta con un amplio portafolio y tarifas preferenciales para egresados SENA", url: "https://centroclinicoverutti.wixsite.com/centroclinicoverutti" },

        { name: "ORTODONCIA PARA TODOS", type: "Salud", logo: "/empresas/ORTODONCIA PARA TODOS.jpg", benefits: "15% de descuento", url: "https://www.instagram.com/ortodonciaparatodos/" },

        { name: "CARDIOFIT", type: "Zona de entrenamiento Grupal", logo: "/empresas/CARDIOFIT.jpg", benefits: "20% de descuento en el pago de la mensualidad, permitiendo el uso de los servicios de lunes a viernes en los horarios de mañana, tarde y noche; y un descuento del 15% para las clases de los días sábados y domingos", url: "https://www.instagram.com/cardiofit_popayan/" },

        { name: "ECOGLAMPING", type: "Turismo", logo: "/empresas/ECOGLAMPING.jpg", benefits: "10% de descuento de lunes a jueves", url: "https://www.instagram.com/ecoglamping_belen/" },

        { name: "FINCA PARAISO VILLA ALEJANDRO", type: "Comercialización de Café Especial", logo: "/empresas/FINCA PARAISO.jpg", benefits: "10% de descuento", url: "https://www.instagram.com/fincaparaisovillalejandro/" },

        { name: "GRUPOSURTICAMPO", type: "Agrícola", logo: "/empresas/GRUPOSURTICAMPO.jpg", benefits: "10% en medicamentos y 5% en Abonos, enmiendas y productos agrícolas - Maquinaria agrícola - Concentrados balanceados para animales de producción - Concentrados para mascotas y arenas sanitarias para gatos", url: "https://gruposurticampo.com.co/tienda/" },
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
                  <Popover key={partner.name}>
                    <PopoverTrigger asChild>
                      <Card
                        className="cursor-pointer flex items-center justify-center border-2 border-gray-200 bg-white p-6 transition-all hover:border-[#39b54a] hover:shadow-md"
                      >
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="rounded-md"
                          width={"150px"}
                          height={"100px"}
                        />
                      </Card>
                    </PopoverTrigger>
                    <PopoverContent className="w-96 p-6" sideOffset={5}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#39b54a]/10">
                            <Gift className="h-6 w-6 text-[#39b54a]" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#003876]">{partner.name}</h4>
                            <p className="text-sm text-gray-500">{partner.type}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-base font-medium text-gray-700">Beneficios:</p>
                          <p className="text-base text-gray-600">{partner.benefits}</p>
                        </div>
                        <Button
                          asChild
                          className="w-full h-11 text-base bg-[#39b54a] hover:bg-[#009639]"
                        >
                          <a
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            Visitar sitio web
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
