
import { ButtonProps } from './types'

const Button = ({ children, className, Icon, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#F5671B] hover:[#E81946] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff7429] ${className}`}
    >
      {Icon && (
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <Icon
            className="h-5 w-5 text-[#ff7429] group-hover:[#ff7429"
            aria-hidden="true"
          />
        </span>
      )}
      {children}
    </button>
  )
}

export default Button
