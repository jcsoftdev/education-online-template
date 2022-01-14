import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../../components/Atoms/Button'
import Input from '../../components/Atoms/Input'
import Wrapper from '../../components/Wrapper'
import { Result } from './types'

export default function Home() {
  const [persons, setPersons] = useState<Result[]>([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=15').then((res) => {
      const result = res.data.results as Result[]
      setPersons(result)
    })
  }, [])

  return (
    <div className='bg-[#121f3d] py-10' >
      <Wrapper>
        <div className="grid grid-cols-[4fr_3fr_7fr] ">
          <div className="col-start-2 col-end-4 row-start-1 grid grid-cols-5 gap-5" >
            {persons.map((person) => {
              return (
                  <img key={ person.cell+person.id.value+person.id.name} src={person.picture.large} alt="" />
              )
            })}
          </div>
          {/* background-image: linear-gradient(90deg,#121f3d 17%,rgba(18,31,61,.9) 75%,rgba(18,31,61,0)); */}
          <div className="row-start-1 col-start-1 col-end-3 text-slate-100 bg" style={{background: 'linear-gradient(90deg,#121f3d 17%,rgba(18,31,61,.9) 75%,rgba(18,31,61,0))'}}>
            <div className="">
              <h1 className="text-4xl text-">
                Fórmate online como profesional en tecnología
              </h1>
              <p className="text-xl">
                70% de los graduados de Platzi duplican sus ingresos
              </p>
              <p className="text-xl">
                20% crean su propia empresa de tecnología o startup
              </p>
              <p>Acelera tu carrera profesional:</p>
              <div>
                <Input />
                <Button> Entra a Platzi</Button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-5xl"></h1>
      </Wrapper>
    </div>
  )
}
