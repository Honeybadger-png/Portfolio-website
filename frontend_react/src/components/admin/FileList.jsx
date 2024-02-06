import React from 'react'

const FileList = (files) => {
  return (
    <div>
        {
            files.map((file,index)=>{
                <div>
                    {file.name}
                </div>
            })
        }
        <div>
            <button className='text-black'>Cancel</button>
        </div>
    </div>
  )
}

export default FileList