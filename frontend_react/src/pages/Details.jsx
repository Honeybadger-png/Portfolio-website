import React from 'react'
import { useLocation } from 'react-router-dom'
import {DetailsNavbar,ProjectDetail,StarsCanvas} from "../components"

const Details = () => {
  const location = useLocation()
  const {data} = location.state
  console.log(data);
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <DetailsNavbar />
      </div>
      <div className='relative mx-5 pb-5'>
        <ProjectDetail project={data} />
      </div>
      <StarsCanvas />
    </div>
  )
}

export default Details