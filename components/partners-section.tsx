import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ExternalLink, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PartnersSection() {
  const partnerCategories = [
    {
      title: "Empresas aliadas",
      partners: [
        {
          name: "CAFÉ SOLO",
          type: "Restaurante/Cafetería",
          logo: "/empresas/CAFESOLO.jpg",
          benefits:
            "20% de descuento en horario de la mañana y 10% en horario de la tarde - noche",
          url: "https://www.facebook.com/SoloCafeSolo/",
        },

        {
          name: "HALOUMI",
          type: "Restaurante",
          logo: "/empresas/HALOUMI.png",
          benefits: "10% de descuento de Lunes a Jueves",
          url: "https://www.instagram.com/haloumiburger0/",
        },

        {
          name: "ALEJAMIEL",
          type: "Alimentos",
          logo: "/empresas/ALEJAMIEL.jpg",
          benefits: "15% de descuento",
          url: "https://api.whatsapp.com/send?phone=573126015798",
        },

        {
          name: "SOPATRI",
          type: "Tienda de Ropa",
          logo: "/empresas/SOPATRI.jpg",
          benefits: "10% de descuento",
          url: "https://www.instagram.com/sopatri_tienda_de_ropa/",
        },

        {
          name: "CONFECCIONES ERIKS",
          type: "Confecciones",
          logo: "/empresas/ERIKS.jpg",
          benefits: "10% de descuento",
          url: "https://www.tiktok.com/@confeccioneseriks",
        },

        {
          name: "AMIGA SALUD",
          type: "Droguería",
          logo: "/empresas/AMIGA SALUD.jpg",
          benefits: "5% de descuento",
          url: "https://www.facebook.com/DrogueriaAmigaSalud/",
        },

        {
          name: "VERUTTI",
          type: "Centro Clínico",
          logo: "/empresas/VERUTTI.jpg",
          benefits:
            "Cuenta con un amplio portafolio y tarifas preferenciales para egresados SENA",
          url: "https://centroclinicoverutti.wixsite.com/centroclinicoverutti",
        },

        {
          name: "ORTODONCIA PARA TODOS",
          type: "Salud",
          logo: "/empresas/ORTODONCIA PARA TODOS.jpg",
          benefits: "15% de descuento",
          url: "https://www.instagram.com/ortodonciaparatodos/",
        },

        {
          name: "CARDIOFIT",
          type: "Zona de entrenamiento Grupal",
          logo: "/empresas/CARDIOFIT.jpg",
          benefits:
            "20% de descuento en el pago de la mensualidad, permitiendo el uso de los servicios de lunes a viernes en los horarios de mañana, tarde y noche; y un descuento del 15% para las clases de los días sábados y domingos",
          url: "https://www.instagram.com/cardiofit_popayan/",
        },

        {
          name: "ECOGLAMPING",
          type: "Turismo",
          logo: "/empresas/ECOGLAMPING.jpg",
          benefits: "10% de descuento de lunes a jueves",
          url: "https://www.instagram.com/ecoglamping_belen/",
        },

        {
          name: "FINCA PARAISO VILLA ALEJANDRO",
          type: "Comercialización de Café Especial",
          logo: "/empresas/FINCA PARAISO.jpg",
          benefits: "10% de descuento",
          url: "https://www.instagram.com/fincaparaisovillalejandro/",
        },

        {
          name: "GRUPOSURTICAMPO",
          type: "Agrícola",
          logo: "/empresas/GRUPOSURTICAMPO.jpg",
          benefits:
            "10% en medicamentos y 5% en Abonos, enmiendas y productos agrícolas - Maquinaria agrícola - Concentrados balanceados para animales de producción - Concentrados para mascotas y arenas sanitarias para gatos",
          url: "https://gruposurticampo.com.co/tienda/",
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-3 text-4xl font-extrabold text-[#003876]">
            ¿Por qué debería <span className="underline">generar mi carné</span>?
          </h3>
          <p className="text-gray-600">
            Disfruta de{" "}
            <span className="font-bold">beneficios exclusivos</span> con
            nuestras entidades aliadas
          </p>
        </div>

        <div className="space-y-8">
          {partnerCategories.map((category) => (
            <div key={category.title}>
              <h4 className="mb-4 text-2xl font-bold text-[#009639]">
                {category.title}
              </h4>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {category.partners.map((partner) => (
                  <Popover key={partner.name}>
                    <PopoverTrigger asChild>
                      <Card className="cursor-pointer flex items-center justify-center border-2 border-gray-200 bg-white p-6 transition-all hover:border-[#39b54a] hover:shadow-md">
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
                            <h4 className="text-lg font-semibold text-[#003876]">
                              {partner.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {partner.type}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-base font-medium text-gray-700">
                            Beneficios:
                          </p>
                          <p className="text-base text-gray-600">
                            {partner.benefits}
                          </p>
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

        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h3 className="mb-2 text-2xl font-bold text-[#003876]">
            ¡Únete a nuestra comunidad de WhatsApp!
          </h3>
          <p className="mx-auto mb-6 max-w-xl text-gray-600 font-semibold">
            Conoce oportunidades laborales, beneficios para egresados SENA y más...
          </p>
          <div className="mx-auto mb-4 flex justify-center">
            <img
              src="/community/QR.jpg"
              alt="Código QR Grupo de WhatsApp Egresados SENA Cauca"
              className="h-64 w-64 rounded-xl object-cover shadow-md ring-4 ring-[#25D366]"
              loading="lazy"
            />
          </div>
          <p className="mx-auto mb-6 max-w-lg text-sm text-gray-500 italic">
            Puedes ingresar escaneando este código QR oficial de WhatsApp, o
            haciendo click en el siguiente enlace:
          </p>
          <a
            href="https://chat.whatsapp.com/GBDH6SaNzrZ1eaXallSBNj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#1DA851]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Unirme al grupo
          </a>
        </div>
      </div>
    </section>
  );
}
