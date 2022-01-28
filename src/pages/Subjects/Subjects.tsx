import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'

interface CourseProps {
  id_curso: number
  nombre: string
  description: string
  image: string
}

interface SubjectProps {
  id_tema: number
  title: string
  description: string
  curso: number
}

interface VideoProps {
  id_video: number
  url_video: string
  title: string
  nivel: number
  id_tema: number
}

const Subjects = () => {
  const { id } = useParams()
  const [subjects, setSubjects] = useState<SubjectProps[]>([])
  const [course, setCourse] = useState<CourseProps>()
  const [videos, setVideos] = useState<VideoProps[]>([])
  const [subjectOpened, setSubjectOpened] = useState(0)

  useEffect(() => {
    console.log(id)
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/temas/?search=${id}`)
      const data = await response.json()
      console.log(data)
      setSubjects(data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/cursos/${id}`)
      const data = await response.json()
      console.log(data)
      setCourse(data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    fetchVideos(subjectOpened)
  }, [subjectOpened])

  const fetchVideos = async (id: number) => {
    const response = await fetch(`http://localhost:8000/videos/?search=${id}`)
    const data = await response.json()
    console.log(data)
    setVideos(data)
  }

  const getUrlVideo = (link: string) => {
    if (link.includes('youtube.com/watch?v=')) {
      const arr = link.split('?v=')
      const newUrl = arr[1].split('&')
      return `https://www.youtube.com/embed/${newUrl[0]}?vq=hd1080&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&autohide=0&controls=0&disablekb=1`
    }
    return link
  }

  const onHandleSubject = (id: number) => {
    setVideos([])
    setSubjectOpened(id)
  }

  return (
    <Wrapper>
      <h1 className="my-4 font-bold">{course?.nombre}</h1>
      <div className="flex gap-5">
        <aside className="md:w-4/12 lg:w-3/12 self-start shadow-md shadow-[#ff9b6533] rounded-md bg-sky-50 ">
          <nav>
            <ul className="flex flex-col space-y-2">
              {subjects.map((subject) => (
                <li className=" " key={subject.id_tema}>
                  <button
                    onClick={() => onHandleSubject(subject.id_tema)}
                    className="flex items-center hover:text-slate-100 hover:bg-[#F5671B] text-[#111]  p-2 w-full"
                  >
                    {subject.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="md:w-8/12 lg:w-9/12 p-4 bg-sky-50 rounded-md flex flex-wrap flex-col justify-center items-center ">
          {videos.map((video) => (
            <div className="mb-5" key={video.id_video}>
              <h2 className="font-bold mb-2">{video.title}</h2>
              <iframe
                className="aspect-video"
                src={`${getUrlVideo(video.url_video)}`}
                width={'500px'}
                frameBorder={0}
              />
            </div>
          ))}
        </main>
      </div>
    </Wrapper>
  )
}

export default Subjects
