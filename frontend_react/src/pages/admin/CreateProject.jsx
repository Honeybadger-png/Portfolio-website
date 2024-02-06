import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import TagsInput from '../../components/admin/TagsInput'
import TextInput from '../../components/admin/TextInput'
import { FaUpload } from "react-icons/fa";




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



    const postFile = async (file)=>{
        const formData = new FormData()
        formData.append('file',file)
        formData.append('upload_preset','projectmanager')
        const response = await axios.post('')
        const data = await response.json()
        console.log(data);
    }

    const  postMultipleFiles = async (files) => {
        const formData = new FormData()
        for (let i = 0; i < files.length; i++) {
            formData.append('files',files[i])
        }
        const response = await axios.post('')
        const data = await response.json()
        console.log(data);
    }
    const handleCreateProject =async (event) => {
        const formData = new FormData()
        console.log("deneme");
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
        await axios.post(`${LOCAL_URL}/admin/uploadFile`,formData,project
        ).then((response)=> {
            console.log(response);
        }).catch((error)=> {
            console.log(error.response.data);
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


  return (
    <div className='flex justify-start m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <div className='pt-5'> 
            <div className='flex flex-col w-full items-center justify-start mx-5'>
                <div className='flex mb-10'>
                    <h1 className='text-primary font-bold'>Create Project</h1>
                </div>
                <form className='flex w-full justify-center items-center border-2 rounded-xl px-8 pt-6 pb-5 mb-4' onSubmit={handleCreateProject}>
                    <div className='flex flex-col w-full '>
                        <div className='flex'>
                            <div className='mx-5 w-6/12'>
                                <TextInput name="name" setter={setName} label="Project Name" />
                                <TextInput name="projectId" setter={setProjectId} label="Unique Project Id" />
                                <TextInput name="source_code_link" setter={setSource_Code_Link} label="Github Source Link" />
                                <div className='flex justify-start mb-4 py-5'>
                                    {/* ProjectTags*/}
                                    <label htmlFor="" className='text-primary mx-5 font-bold text-xl p-2'> Project Tags</label>
                                    <TagsInput setTags={setTags} tags={tags} />
                                </div>
                                <div className='flex flex-col items-center justify-center w-full text-black bg-transparent border-2 border-dashed rounded-2xl border-purple-500 h-[200px]' onDragOver={onDragOver} onDrop={onDrop}>
                                {isDragging ? (
                                    <span className='text-black'>Drop images here</span>
                                ):(
                                    <>
                                        Drag Single Image for Main Page {""}
                                        <span className='text-purple-500' role='button' onClick={selectFile}>
                                            Browse
                                        </span>
                                        <div className='flex'>
                                            <FaUpload className='text-purple-500 text-2xl m-2' />
                                        </div>
                                    </>
                                )}
                                <input type="file"  ref={mainInputRef} hidden onChange={(event) => handleMainImage(event)} />
                                </div>
                                <div className='w-full flex justify-start items-start flex-wrap h-[200px] bg-white rounded-xl  max-h-[200px] overflow-y-auto mt-5'>
                                    {
                                        mainImage ? (
                                            <div className='w-12/12 h-12/12 p-2'>
                                                <p className='text-black cursor-pointer' onClick={()=> deleteMainImage(0)}>&times;</p>
                                                <img className='' src={mainImage.url} alt={mainImage.name} />
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-start w-6/12 mx-5 h-full'>
                                <div className='flex flex-col items-center justify-center w-full text-black bg-transparent border-2 border-dashed rounded-2xl border-purple-500 h-[200px]' onDragOver={onDragOver} onDrop={onDrop}>
                                {isDragging ? (
                                    <span className='text-black'>Drop images here</span>
                                ):(
                                    <>
                                        Drag & Drop image here or {""}
                                        <span className='text-purple-500' role='button' onClick={selectfiles}>
                                            Browse
                                        </span>
                                        <div className='flex'>
                                            <FaUpload className='text-purple-500 text-2xl m-2' />
                                        </div>
                                    </>
                                )}
                                <input type="file" multiple ref={inputRef} hidden onChange={(event) => handleFiles(event)} />
                                </div>
                                <div className='w-full flex justify-start items-start flex-wrap h-[200px] bg-white rounded-xl  max-h-[200px] overflow-y-auto mt-5'>
                                    {
                                        images.map((image,index)=>(
                                                <div className='w-12/12 h-12/12 p-2' key={index}>
                                                    <p key={index} className='text-black cursor-pointer' onClick={()=> deleteImage(index)}>&times;</p>
                                                    <img src={image.url} alt={image.name} />
                                                    <input type="text" placeholder={"please add a title"} className='flex items-center p-2-0 border-2 border-black-100 p-5  outline-none bg-transparent text-blue-400 ' onChange={(event)=> handleImageTitle(event,index)}  />
                                                </div>
                                        ))
                                        
                                    }
                                </div>
                                
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col items-center justify-center mb-4 py-5'>
                                    {/* ProjectDescription*/}
                                    <label htmlFor="" className='text-primary mx-5 font-bold text-2xl'>Project Description</label>
                                    <textarea name="description" id="description" cols="90" rows="10" className='items-center rounded-md bg-transparent border-2 border-black-100 text-teal-400 p-5' onChange={(event)=> setDescription(event.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center' type="submit">
                            <button className='rounded-xl bg-slate-800 p-2'>Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateProject