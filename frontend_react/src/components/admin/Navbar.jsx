import React,{useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft } from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import { PiSignOutBold } from "react-icons/pi";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import avatar from '../../data/avatar.jpg'
import {Cart,Chat,Notification,UserProfile} from './index'
import {useStateContext} from '../../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom'

const NavButton = ({title,customFunc,icon,color,dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full text-slate-600 p-3 hover:bg-light-gray'>
      <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
      {icon}
    </button>
  </TooltipComponent>
)


const Navbar = () => {
  const {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,currentColor} = useStateContext();
  const navigate = useNavigate()
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  },[])

  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  useEffect(() => {
    if(screenSize<=900) {
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  },[screenSize])


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={()=> setActiveMenu((prevActiveMenu)=> !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu/>}/>
      <div className='flex'>
      <NavButton title="Cart" customFunc={()=> handleClick('cart')} color={currentColor} icon={<FiShoppingCart/>}/>
      <NavButton title="Chat" dotColor='#03C9D7' customFunc={()=> handleClick('chat')} color={currentColor} icon={<BsChatLeft/>}/>
      <NavButton title="Notifications" dotColor='#03C9D7' customFunc={()=> handleClick('Notification')} color={currentColor} icon={<RiNotification3Line/>}/>
      <NavButton title="SignOut" dotColor='#03C9D7' customFunc={()=> handleSignOut()} color={currentColor} icon={<PiSignOutBold/>}/>
      <TooltipComponent content="Profile" position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-slate-600 rounded-lg' onClick={()=> handleClick('userProfile')}>
          <img src={avatar} className='rounded-full w-8 h-8'/>
          <p>
            <span className=' text-14' >Hi,</span>{' '}
            <span className=' font-bold ml-1 text-14'>Michael</span>
          </p>
          <MdKeyboardArrowDown className=' text-14' />
        </div>
      </TooltipComponent>
      {isClicked.cart && <Cart/>}
      {isClicked.chat && <Chat/>}
      {isClicked.Notification && <Notification/>}
      {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar