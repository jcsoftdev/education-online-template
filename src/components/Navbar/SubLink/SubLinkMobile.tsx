import { NavLink } from 'react-router-dom'
import { SubLinksI } from './types'

const SubLinkMobile = ({ links }: { links: SubLinksI[] }) => {
  return (
    <>
      {links.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
        >
          <item.Icon
            className="flex-shrink-0 h-6 w-6 text-indigo-600"
            aria-hidden="true"
          />
          <span className="ml-3 text-base font-medium text-gray-900">
            {item.name}
          </span>
        </NavLink>
      ))}
    </>
  )
}

export default SubLinkMobile
