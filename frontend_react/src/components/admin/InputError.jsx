import React from 'react'
import {motion} from 'framer-motion'
import {MdError} from 'react-icons/md'

const InputError = ({message}) => {
    const framer_error = {
        initial: {y:10,opacity:0},
        animate: {y:0,opacity:1},
        exit: {y:10,opacity:0},
        transition: {duration:0.2}
    }

  return (
    <>
        <motion.p className="flex items-center px-2 gap-2 text-red-500 text-left text-[17px] max-w-7xl leading-[30px]" {...framer_error}>
            <MdError className='text-red-500' />
            {message}    
        </motion.p>
    </>
  )
}


export default InputError