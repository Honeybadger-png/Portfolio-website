import React from 'react'
import {useState,useEffect,useRef} from 'react'
import { Header } from '../../components/admin'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import TagsInput from '../../components/admin/TagsInput'
import TextInput from '../../components/admin/TextInput'
import { FaUpload } from "react-icons/fa";
import { formValidation } from '../../utils/validations';
import InputError from '../../components/admin/InputError'
import {AnimatePresence} from 'framer-motion'

const Projects = () => {
  let gridInstance;
  const location = useLocation()
  const LOCAL_URL = process.env.REACT_APP_LOCAL_URL
  
  const [project,setProject] = useState({})
  const [name, setName] = useState('')

  const [source_code_link, setSource_Code_Link] = useState('')
  const [description, setDescription] = useState('')
  const [mainImage,setMainImage] = useState(null)
  const [mainFile, setMainFile] = useState('')
  const [files, setFiles] = useState('')
  const [tags, setTags] = useState([])
  const [images,setImages] = useState([])
  const [projectId, setProjectId] = useState('')
  const inputRef = useRef(null)
  const mainInputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [values, setValues] = useState({
    name:'',
    projectId:'',
    source_code_link:'',
    description:'',
    mainImage:'',
    images:[]
  })
  const projeId = location.state.projectId
  
  useEffect(() => {
    getProject()
    
  },[])


  const handleUpdate = async() => {
    console.log('update');
  }

  const getProject = async () => {
    const response = await axios.get(`${LOCAL_URL}/admin/project/${projeId}`);
    const data = response.data
    console.log(data);
    setProjectId(data.projectId)
    setName(data.name)
    setSource_Code_Link(data.source_code_link)
    setValues({...values,projectId:data.projectId,name:data.name,source_code_link:data.source_code_link,description:data.description,mainImage:data.mainImage,images:data.images})
    setProject(data)
  }

  const handleKeyDown = (event)=>{
    if(event.key === 'Enter'){

        event.preventDefault();
    }
  }


  return (
    <div className='m-2 md:m-10 p-2 md:p-10'>
      <Header category="Page" title={projectId} />
      <div className='flex flex-col flex-wrap items-center mx-5 justify-center lg:flex-nowrap rounded-3xl'>
        <form className='flex w-full justify-center items-center border-2 border-purplish rounded-xl px-8 pt-6 pb-5 mb-4' onSubmit={handleUpdate}>
          <div className='flex flex-col w-full '>
            <div className='flex flex-row w-full'>
                <div className='mx-5 w-6/12'>
                  <TextInput name="name"  label="Project Name" setter={setName} setValue = {name}  handleKey={handleKeyDown} values={values}  setValues={setValues} />
                  <TextInput name="projectId"  label="Project Name" setter={setProjectId} setValue = {projectId}  handleKey={handleKeyDown} values={values}  setValues={setValues} />
                  <TextInput name="source_code_link"  label="Project Name" setter={setSource_Code_Link} setValue = {source_code_link}  handleKey={handleKeyDown} values={values}  setValues={setValues} />
                </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Projects