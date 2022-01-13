import { SVGProps } from "react";

export interface ButtonProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  type?: 'button' | 'submit' | 'reset'
}