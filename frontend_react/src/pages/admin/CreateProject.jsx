import React,{useState,useEffect} from 'react'
import axios from 'axios'

const CreateProject = () => {
    const [name, setName] = useState('')
    const [projectId, setProjectId] = useState('')
    const [source_code_link, setSource_Code_Link] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState([{name:"",color:""}])
    const [images,setImages] = useState([{url:"",title:"",link:""}])

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

    const handleCreateProject = async (event) => {

    }

  return (
    <div className='flex justify-start m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <div className='pt-5'> 
            <div className='flex flex-col w-full items-center justify-start mx-5'>
                <div className='flex mb-10'>
                    <h1 className='text-primary font-bold'>Create Project</h1>
                </div>
                <form className='flex flex-col border-2 w-full rounded-xl px-8 pt-6 pb-5 mb-4' onSubmit={handleCreateProject}>
                    <div className='flex justify-start mb-4 py-5'>
                        {/* ProjectId*/}
                        <label htmlFor="" className='text-primary mx-5'>Project Id</label>
                        <input type="text" className='items-center rounded-md px-5 bg-half-transparent text-gray-200' />
                    </div>
                    <div className='flex justify-start mb-4 py-5'>
                        {/* ProjectName*/}
                        <label htmlFor="" className='text-primary mx-5'> Projet Name</label>
                        <input type="text" className='items-center rounded-md px-5 bg-half-transparent text-gray-200' />
                    </div>
                    <div className='flex justify-start mb-4 py-5'>
                        {/* ProjectDescription*/}
                        <label htmlFor="" className='text-primary mx-5'>Project Description</label>
                        <input type="text" className='items-center rounded-md px-5 bg-half-transparent text-gray-200' />
                    </div>
                    <div className='flex justify-start mb-4 py-5'>
                        {/* ProjectTags*/}
                        <label htmlFor="" className='text-primary mx-5'> Project Tags</label>
                        <input type="text" className='items-center rounded-md px-5 bg-half-transparent text-gray-200' />
                    </div>
                    <div className='flex justify-start mb-4 py-5'>
                        {/* Github Source Link*/}
                        <label htmlFor="" className='text-primary mx-5'>Github Source Link</label>
                        <input type="text" className='items-center rounded-md px-5 bg-half-transparent text-gray-200' />
                    </div>
                    <div className='flex justify-start mb-4 py-5'>
                        {/* Main Image*/}
                        <label className='text-primary m-2 font-semibold' >Main Image</label>
                        <input type="file" className='text-primary' onChange={(event)=> {
                            const file = event.target.files[0]
                            console.log(file);
                        }} />
                    </div>
                    <div className='flex justify-start mb-4 py-5'>
                        <label className='text-primary m-2 font-semibold' >Images</label>
                        <input type="file" className='text-primary' multiple onChange={(event)=>{
                            const files = event.target.files
                            console.log(files);
                        }} />
                    </div>
                    <div className='flex' type="submit">
                        <button className='rounded-xl bg-slate-800 p-2'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateProject