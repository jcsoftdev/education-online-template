import React from 'react'

const Card: React.FC<{}> = ({ children }) => {
  return (
    <div className="bg-white px-4 rounded-lg py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      {children}
    </div>
  )
}

export default Card
