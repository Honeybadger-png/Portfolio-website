import React from 'react'
import {motion} from 'framer-motion'
import {MdClose} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const SuccesNotification = ({isSucces,setter}) => {
    const navigate = useNavigate()

    const NotificationVariants = {
        initial:{
            opacity:0,
            y:50,
            scale:0.2,
            transition:{
                duration:0.5
            }
        },
        animate:{
            opacity:1,
            y:0,
            scale:1,
        },
        exit:{
            opacity:0,
            scale:0.2,
            transition : {
                ease:"easeInOut",
                duration:0.5
            }
        },
        hover:{
            scale:1.05,
            transition:{
                duration:0.2
            }
        }
    }

    const handleClose = () => {
        setter(false)
        navigate("/");
    }
    

  return (
    <>
        {isSucces && 
            <motion.div positionTransition style={{background:"linear-gradient(15deg,#6adb00,#04e800)"}} variants={NotificationVariants} initial="initial" animate="animate" exit="exit" whileHover="hover" className="fixed bottom-0  h-12 w-64 justify-center z-50 "
            >
                <p className="text-white text-center text-[20px] py-3">Succesfully Updated</p>
                <button onClick={()=> handleClose()}>
                    <MdClose className="text-white text-3xl absolute top-2 right-2" />
                </button> 
            </motion.div>
        }
    </>
  )
}

export default SuccesNotification