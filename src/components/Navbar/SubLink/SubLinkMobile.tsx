import { Popover } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import { SubLinksI } from './types'

const SubLinkMobile = ({ links }: { links: SubLinksI[] }) => {
  return (
    <>
      {links.map((item) => (
        <Popover.Button  key={item.id}>
          <NavLink
            to={item.to}
            className="-m-3 p-3 flex items-center rounded-md hover:bg-[#FEF0E3] "
          >
            <item.Icon
              className="flex-shrink-0 h-6 w-6 text-[#F5671B]"
              aria-hidden="true"
            />
            <span className="ml-3 text-base font-medium text-gray-900">
              {item.name}
            </span>
          </NavLink>
        </Popover.Button>
      ))}
    </>
  )
}

export default SubLinkMobile
