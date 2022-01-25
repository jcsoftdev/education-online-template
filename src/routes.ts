import { ChartBarIcon, CursorClickIcon, HomeIcon, RefreshIcon, ShieldCheckIcon, ViewGridIcon } from "@heroicons/react/outline";
import { NavbarProps } from "./components/Navbar/SubLink/types";


export const rutas: NavbarProps = {
  links: [
    {
      id: "home",
      name: "Inicio",
      description: "Inicio",
      Icon: HomeIcon,
      to: "/"
    },
    
    {
      id: '3',
      name: "Cursos",
      description: "Suscription",
      to: "/cursos",
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