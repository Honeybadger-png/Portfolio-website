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
  const [mainImage,setMainImage] = useState([])
  const [dummyMainImage,setDummyMainImage] = useState('')
  const [mainFile, setMainFile] = useState('')
  const [files, setFiles] = useState('')
  const [tags, setTags] = useState([])
  const [images,setImages] = useState([])
  const [dummyImages,setDummyImages] = useState([])
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
    setProjectId(data.projectId)
    setName(data.name)
    setSource_Code_Link(data.source_code_link)
    setTags(data.tags)
    setDescription(data.description)
    setDummyMainImage(data.mainImage)
    setDummyImages(data.images)
    console.log(data.images);
    console.log(data.mainImage);
    setValues({...values,projectId:data.projectId,name:data.name,source_code_link:data.source_code_link,description:data.description,mainImage:data.mainImage,images:data.images})
    setProject(data)
  }

  const handleKeyDown = (event)=>{
    if(event.key === 'Enter'){

        event.preventDefault();
    }
  }
  const handleValidation =  (values) => {
    setValues({name,projectId,source_code_link,description,mainImage,images})
    const validation = formValidation(values);
    setErrors(validation)
  }
  const handleTagError = (tags) => {
    if(Object.keys(tags).length === 0){
        setTagError('Please add a tag')
    }else {
        setTagError('')
    }
  }
  function onDragOver(event){
    event.preventDefault()
    setIsDragging(true)
  }
  const  onDrop = (event) => {
    event.preventDefault()
    setIsDragging(false)
    setImages(event.dataTransfer.files)
  }
  const handleMainImage = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    console.log(file);
    setMainFile(file)
    if(file.length === 0) return
    if(file.type.split('/')[0] !== 'image') return;
    setMainImage(
        {
            source: file.name,
            url: URL.createObjectURL(file),
        }
    )
  }
  function selectfiles (){
    inputRef.current.click()
  }
  function selectFile (){
    mainInputRef.current.click()
  }
  function deleteMainImage(index){
    setDummyMainImage('')
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
                  <TextInput name="projectId"  label="Unique Project Id" setter={setProjectId} setValue = {projectId}  handleKey={handleKeyDown} values={values}  setValues={setValues} />
                  <TextInput name="source_code_link"  label="Github Source Link" setter={setSource_Code_Link} setValue = {source_code_link}  handleKey={handleKeyDown} values={values}  setValues={setValues} />
                  <div className='flex justify-start mb-4 py-5'>
                    {/* ProjectTags*/}
                    <label htmlFor="" className=' mx-5 font-bold text-xl p-2'> Project Tags</label>
                    <TagsInput setTags={setTags}  tags={tags} setValues={handleValidation} />
                  </div>
                  <div>
                    {/* I cant reach to blob data because it will be deleted so i created dummy data to show uploaded data We need to create a function to delete uploaded file and this will trigger upload file
                      similar function also be made for the images
                    */}
                    <div> 
                        {
                          /* {`../../uploads/mainImages/mainImage-${name}-${projectId}-${mainImage[keys].source}`}*/ 
                          dummyMainImage ? (
                            <div className='w-full flex justify-start items-start flex-wrap h-[200px] bg-white rounded-xl  max-h-[200px] overflow-y-auto mt-5'>
                              <h1>Current Main Image</h1>
                              <div className='w-12/12 h-12/12 p-2'>
                                  <p className=' cursor-pointer' onClick={()=> deleteMainImage(0)}>&times;</p>
                                  <img className='' src={`../../uploads/mainImages/mainImage-${name}-${projectId}-${dummyMainImage}`} alt={mainImage} />
                              </div>
                            </div>
                          ) : null
                        }
                    </div>
                    {
                      dummyMainImage ? null : (
                        <div>
                          <div className='flex flex-col items-center justify-center w-full bg-transparent border-2 border-dashed rounded-2xl border-purple-500 h-[200px]' onDragOver={onDragOver} onDrop={onDrop}>
                            {isDragging ? (
                              <span className=''>Drop images here</span>
                              ):(
                                <>
                                    Drag Single Image for Main Page {""}
                                    <span className='text-purplish' role='button' onClick={selectFile}>
                                        Browse
                                    </span>
                                    <div className='flex'>
                                        <FaUpload className='text-purplish text-2xl m-2' />
                                    </div>
                                </>
                              )}
                            <input type="file"  ref={mainInputRef} hidden onChange={(event) => handleMainImage(event)} />
                          </div>
                          <div className='w-full flex justify-start items-start flex-wrap h-[200px] bg-white rounded-xl  max-h-[200px] overflow-y-auto mt-5'>
                            {
                                mainImage ? (
                                    <div className='w-12/12 h-12/12 p-2'>
                                        <p className=' cursor-pointer' onClick={()=> deleteMainImage(0)}>&times;</p>
                                        <img className='' src={mainImage.url} alt={mainImage.source} />
                                    </div>
                                ) : null
                            }
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
                <div className='flex flex-col justify-center items-start w-6/12 mx-5 h-full'>
                  <div className='w-full flex justify-start items-start flex-wrap h-[400px] rounded-xl  max-h-[400px] overflow-y-auto mt-5'>
                      {
                        /* {`../../uploads/images/files-${name}-${projectId}-${image.name}`}*/ 
                        dummyImages.map((image,index)=>(
                          <div className='w-12/12 h-12/12 p-2' key={index}>
                            <p key={index} className=' cursor-pointer' onClick={()=> deleteImage(index)}>&times;</p>
                            <img src={`../../uploads/images/files-${name}-${projectId}-${image.name}`} alt={image.name} />
                            <input type="text" placeholder={"please add a title"} className='flex items-center p-2-0 border-2 border-black-100 p-5  outline-none bg-transparent text-purplish ' onKeyDown={handleKeyDown} onChange={(event)=> handleImageTitle(event,index)}  />
                          </div>
                        ))
                      }
                    </div>
                  <div className='flex flex-col items-center justify-center w-full  bg-transparent border-2 border-dashed rounded-2xl border-purple-500 h-[200px]' onDragOver={onDragOver} onDrop={onDrop}>
                    {isDragging ? (
                        <span className=''>Drop images here</span>
                    ):(
                        <>
                            Drag & Drop image here or {""}
                            <span className='text-purplish' role='button' onClick={selectfiles}>
                                Browse
                            </span>
                            <div className='flex'>
                                <FaUpload className='text-purplish text-2xl m-2' />
                            </div>
                        </>
                    )}
                    <input type="file" multiple ref={inputRef} hidden onChange={(event) => handleFiles(event)} />
                  </div>
                  
                </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-center justify-center mb-4 py-5'>
                      {/* ProjectDescription*/}
                      <label htmlFor="" className='mx-5 font-bold text-2xl'>Project Description</label>
                      <textarea name="description" id="description" value={description} cols="90" rows="10" className='items-center rounded-md bg-transparent border-2 border-purplish  text-purplish p-5' onChange={(event)=> setDescription(event.target.value)}></textarea>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Projects