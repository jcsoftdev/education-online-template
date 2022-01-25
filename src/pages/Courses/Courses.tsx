import { useEffect, useState } from 'react'
import Course from '../../components/Course'
import Wrapper from '../../components/Wrapper'

const Courses = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/cursos/')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Wrapper>
      <h1>Cursos</h1>
      <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
        {courses.map((course) => (
          <Course {...course} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Courses
