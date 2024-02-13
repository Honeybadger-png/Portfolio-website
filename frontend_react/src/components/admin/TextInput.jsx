import React from 'react'


const TextInput = ({name,setter,label,handleKey}) => {



  const handleChange = (e) => {
    setter(e.target.value)
  }

  return (
    <div className='flex justify-start mb-4 py-5'>
      <label htmlFor="" className='mx-5 font-bold text-xl p-2 '>{label}</label>
      <div className='border-2 border-purplish p-5 items-center justiy-center flex'>
          <input type="text" name={name} onChange={(e)=> handleChange(e)} className='bg-transparent border-none outline-none text-purplish' placeholder={`Add ${label}`} onKeyDown={handleKey} />
      </div>
    </div>
  )
}

export default TextInput