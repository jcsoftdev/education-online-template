import { InputProps } from './types'

const Input = ({id, className, label,placeholder, ...rest}: InputProps) => {
  return (
    <div>
      <label htmlFor={id}className="sr-only">
        {label}
      </label>
      <input
        {...rest}
        className={`appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#ff7429] focus:border-[#ff7429] focus:z-10 sm:text-sm ${className}`}
        placeholder={placeholder || label}
      />
    </div>
  )
}

export default Input
