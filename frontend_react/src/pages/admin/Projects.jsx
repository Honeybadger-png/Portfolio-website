import React from 'react'
import {useState,useEffect} from 'react'
import { Header } from '../../components/admin'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Projects = ({route}) => {
  let gridInstance;
  const location = useLocation()
  const LOCAL_URL = process.env.REACT_APP_LOCAL_URL
  const projectId = location.state.projectId
  const [project,setProject] = useState({})
  useEffect(() => {
    getProject()
    
  },[])


  

  const getProject = async () => {
    const response = await axios.get(`${LOCAL_URL}/admin/project/${projectId}`);
    const data = response.data
    setProject(data)
  }

  return (
    <div className='m-2 md:m-10 p-2 md:p-10'>
      <Header category="Page" title={projectId} />
      
    </div>
  )
}

export default Projects