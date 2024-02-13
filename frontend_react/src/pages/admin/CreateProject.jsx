import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import TagsInput from '../../components/admin/TagsInput'
import TextInput from '../../components/admin/TextInput'
import { FaUpload } from "react-icons/fa";
import { formValidation } from '../../utils/validations';
import InputError from '../../components/admin/InputError'
import {AnimatePresence} from 'framer-motion'




const CreateProject = () => {
    const [name, setName] = useState('')
    const [projectId, setProjectId] = useState('')
    const [source_code_link, setSource_Code_Link] = useState('')
    const [description, setDescription] = useState('')
    const [mainImage,setMainImage] = useState(null)
    const [mainFile, setMainFile] = useState('')
    const [files, setFiles] = useState('')
    const [tags, setTags] = useState([])
    const [images,setImages] = useState([])
    const inputRef = useRef(null)
    const mainInputRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const LOCAL_URL = process.env.REACT_APP_LOCAL_URL

    const [values, setValues] = useState({
        name:'',
        projectId:'',
        source_code_link:'',
        description:'',
        mainImage:'',
        images:[]
    })
    const [errors,setErrors] = useState({})
    const [tagError,setTagError] = useState('')

    const handleValidation = async (values) => {
        setValues({name:name,projectId:projectId,source_code_link:source_code_link,description:description,mainImage:mainImage,images:images})
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


    const handleCreateProject =async (event) => {
        const formData = new FormData()
        handleTagError(tags)
        handleValidation(values)
        formData.append('mainImage',mainFile)
        for (let index = 0 ; index < files.length; index++){
            const file = files[index]
            formData.append('files',file)
        }
        event.preventDefault()
        const project = {
            name,
            projectId,
            source_code_link,
            description,
            tags,
            mainImage,
            images
        }
        
        await axios.post(`${LOCAL_URL}/admin/createProject`,project).then((response)=> {
            console.log(response.status);
            if (response.status === 200){
                axios.post(`${LOCAL_URL}/admin/uploadFile`,formData)
            }
        }).catch((error)=> {
            console.log(error);
        })
        

    }

    function selectfiles (){
        inputRef.current.click()
    }
    function selectFile (){
        mainInputRef.current.click()
    }

    const  handleFiles = (event)=>{
        event.preventDefault()
        const files = event.target.files
        if(files.length === 0) return
        for (let i=0; i<files.length; i++){
            if(files[i].type.split('/')[0] !== 'image') continue;
            if(!images.some((e)=> e.name === files[i].name)){
                setImages((prevImages)=> [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    }
                ])
                setFiles((prevFiles)=> [...prevFiles,files[i]])
            }
        }
    }
    const handleMainImage = (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        setMainFile(file)
        if(file.length === 0) return
        if(file.type.split('/')[0] !== 'image') return;
        setMainImage(
            {
                name: file.name,
                url: URL.createObjectURL(file),
            }
        )

    }

    function handleImageTitle(event,index){
        setImages((prevImages)=> prevImages.map((image,i)=> i === index ? {...image, title: event.target.value} : image))
    }

    function deleteImage(index){
        setImages((prevImages)=> prevImages.filter((image,i)=> i !== index))
    }
    function deleteMainImage(index){
        setMainImage('')
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
    const handleKeyDown = (event)=>{
        if(event.key === 'Enter'){

            event.preventDefault();
        }
    }


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl w-full'>
        <div className='flex flex-col flex-wrap items-center mx-5 justify-center lg:flex-nowrap rounded-3xl'> 
                <div className='flex mb-10 '>
                    <h1 className=' font-bold'>Create Project</h1>
                </div>
                <form className='flex w-full justify-center items-center border-2 border-purplish rounded-xl px-8 pt-6 pb-5 mb-4' onSubmit={handleCreateProject}>
                    <div className='flex flex-col w-full '>
                        <div className='flex flex-row w-full'>
                            <div className='mx-5 w-6/12'>
                                <TextInput name="name" setter={setName} label="Project Name" handleKey={handleKeyDown} />
                                <AnimatePresence mode="wait" initial={false}  >
                                    {errors.name && <InputError message={errors.name} />}
                                </AnimatePresence>
                                <TextInput name="projectId" setter={setProjectId} label="Unique Project Id" handleKey={handleKeyDown} />
                                <AnimatePresence mode="wait" initial={false}  >
                                    {errors.projectId && <InputError message={errors.projectId} />}
                                </AnimatePresence>
                                <TextInput name="source_code_link" setter={setSource_Code_Link} label="Github Source Link" handleKey={handleKeyDown} />
                                <AnimatePresence mode="wait" initial={false}  >
                                    {errors.source_code_link && <InputError message={errors.source_code_link} />}
                                </AnimatePresence>
                                <div className='flex justify-start mb-4 py-5'>
                                    {/* ProjectTags*/}
                                    <label htmlFor="" className=' mx-5 font-bold text-xl p-2'> Project Tags</label>
                                    <TagsInput setTags={setTags} tags={tags} setValues={handleValidation} />
                                </div>
                                <AnimatePresence mode="wait" initial={false}  >
                                    {tagError && <InputError message={tagError} />}
                                </AnimatePresence>
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
                                                <img className='' src={mainImage.url} alt={mainImage.name} />
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-start w-6/12 mx-5 h-full'>
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
                                <div className='w-full flex justify-start items-start flex-wrap h-[400px] rounded-xl  max-h-[400px] overflow-y-auto mt-5'>
                                    {
                                        images.map((image,index)=>(
                                                <div className='w-12/12 h-12/12 p-2' key={index}>
                                                    <p key={index} className=' cursor-pointer' onClick={()=> deleteImage(index)}>&times;</p>
                                                    <img src={image.url} alt={image.name} />
                                                    <input type="text" placeholder={"please add a title"} className='flex items-center p-2-0 border-2 border-black-100 p-5  outline-none bg-transparent text-purplish ' onKeyDown={handleKeyDown} onChange={(event)=> handleImageTitle(event,index)}  />
                                                </div>
                                        ))
                                        
                                    }
                                </div>
                                
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col items-center justify-center mb-4 py-5'>
                                    {/* ProjectDescription*/}
                                    <label htmlFor="" className='mx-5 font-bold text-2xl'>Project Description</label>
                                    <textarea name="description" id="description" cols="90" rows="10" className='items-center rounded-md bg-transparent border-2 border-purplish  text-purplish p-5' onChange={(event)=> setDescription(event.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center' type="submit">
                            <button className='rounded-2xl bg-purplish p-3'>Create</button>
                        </div>
                    </div>
                </form>

        </div>
    </div>
  )
}

export default CreateProject