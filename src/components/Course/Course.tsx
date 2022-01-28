import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Atoms/Card'
import { CourseProps } from './types'

const Course: React.FC<CourseProps> = ({ description, image, nombre, id_curso }) => {
  return (
    <Link to={{pathname:'/cursos/'+id_curso, }}>
    <Card>
      <div className="group ">
        <div className=" w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img
            src={image}
            alt={nombre}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <a href={`#`} className='inset-0'>
            {nombre}
          </a>
        </h3>
        <p className="text-base font-semibold text-gray-900">{description}</p>
      </div>
    </Card>
    </Link>
  )
}

export default Course
