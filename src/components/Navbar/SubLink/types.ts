import { SVGProps } from "react";
import { To } from "react-router-dom";

export interface LinksProps {
  id: string;
  name: string
  description: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export interface NavLinkI extends LinksProps {
  to?: To
  subLinks?: SubLinksI[]
}


export interface SubLinksI extends LinksProps {
  to: To
}

export interface NavbarProps {
  links: NavLinkI[]
  // callToActions?: SubLinksI[]
}