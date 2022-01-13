import { ChartBarIcon, CursorClickIcon, HomeIcon, RefreshIcon, ShieldCheckIcon, ViewGridIcon } from "@heroicons/react/outline";


export const rutas = {
  links: [
    {
      id: "home",
      name: "Inicio",
      description: "Inicio",
      Icon: HomeIcon,
      to: "/"
    },
    {
      id: '1',
      name: "Cursos",
      description: "About",
      Icon: HomeIcon,
      subLinks: [
        {
          id: '11',
          name: "Analitycs",
          description: "Analitycs",
          to: "/analytics",
          Icon: CursorClickIcon
        },
        {
          id: '12',
          name: "Engagement",
          description: "Engagement",
          to: "/analytics",
          Icon: ShieldCheckIcon
        },
        {
          id: '13',
          name: "Security",
          description: "Security",
          to: "/sec",
          Icon: ViewGridIcon
        },

      ]
    },
    
    {
      id: '3',
      name: "Suscripcion",
      description: "Suscription",
      to: "/suscription",
      Icon: RefreshIcon
    },
    {
      id: '4',
      name: "Contactos",
      description: "Contaction",
      to: "/contact",
      Icon: ChartBarIcon
    },
  ]
}