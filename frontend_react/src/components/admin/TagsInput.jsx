
import React,{useState} from 'react'
import { tagsColor } from '../../constants'


function TagsInput  ({setTags,tags}) {
    const [randomColor,setRandomColor] = useState('')
    const handleKeyDown =  (e)=>{
        let number = Math.floor(Math.random() * 10)
        setRandomColor(tagsColor[number])
        if(e.key !=='Enter') return
        const value = e.target.value
        if(!value.trim()) return
        console.log(randomColor.color);
        setTags([...tags,{name:value,color:randomColor.color}])
        console.log({name:value,color:randomColor.color});
        console.log(number);
        e.target.value = ""
    }

    const removeTag = (index) => {
        setTags(tags.filter((tag,i)=> i !== index))
    }
  return (
    <div className='border-2 border-black-100 p-5 rounded min-w-[80,600px] mt-1 flex items-center flex-wrap gap-2'>
        {tags.map((tag,index) => (
            <div className={`inline-block p-2 rounded-2xl text-black`} style={{backgroundColor:`${tag.color}`}} key={index}>
                <span  >{tag.name}</span>
                <span className='h-5 w-5 bg-slate-700 inline-flex text-white rounded-xl justify-center items-center ml-2 text-[18px] cursor-pointer' onClick={()=> removeTag(index)}>&times;</span>
            </div>
        ))}
        <input type="text" placeholder='Add a tag' className='flex-grow-1 p-2-0 border-none outline-none bg-transparent text-blue-400 ' onKeyDown={handleKeyDown}  />
    </div>
  )
}

export default TagsInput