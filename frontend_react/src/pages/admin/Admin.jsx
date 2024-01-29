import '../../App.css'
import React,{useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {Navbar,Footer,Sidebar,ThemeSettings} from '../../components/admin/index'
import {Ecommerce,Employees,Customers,Kanban,Editor,Calendar,ColorPicker,Line,Area,Bar,Pie,Financial,ColorMapping,Pyramid,Stacked,Orders,CreateProject} from './index'

import {useStateContext} from '../../contexts/ContextProvider'

const Admin = () => {
    const {activeMenu,themeSettings,setThemeSettings,currentColor,currentMode} = useStateContext();

    return(
        <div className={currentMode === 'Dark' ? 'dark' : 'light'}>
            <div className='flex relative dark:bg-main-light-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent position='Top' content='Settings'>
                        <button type='button' onClick={()=> setThemeSettings(true)} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-dark-gray text-white' style={{background:currentColor,borderRadius:'50%'}}>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed dark:bg-secondary-dark-bg sidebar bg-white'>
                        <Sidebar />
                    </div>
                ):(
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar/>
                    </div>
                )}
                <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'md:ml-72':'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full text-black'>
                        <Navbar/>
                    </div>
                
                    <div>
                        {themeSettings && <ThemeSettings />}
                        <Routes>
                            {/* Dashboard */ }
                            <Route path='/' element={<Ecommerce/>} />
                            {/* Pages */ }
                            <Route path='/orders' element={<Orders/>}/>
                            <Route path='/employees' element={<Employees/>}/>
                            <Route path='/customers' element={<Customers/>}/>
                            <Route path='/details' element={<CreateProject/>}/>
                            {/* Apps */ }
                            <Route path='/kanban' element={<Kanban/>}/>
                            <Route path='/editor' element={<Editor/>}/>
                            <Route path='/calendar' element={<Calendar/>}/>
                            <Route path='/color-picker' element={<ColorPicker/>}/>
                            {/* Charts */ }
                            <Route path='/line' element={<Line/>}/>
                            <Route path='/area' element={<Area/>}/>
                            <Route path='/bar' element={<Bar/>}/>
                            <Route path='/pie' element={<Pie/>}/>
                            <Route path='/financial' element={<Financial/>}/>
                            <Route path='/color-mapping' element={<ColorMapping/>}/>
                            <Route path='/pyramid' element={<Pyramid/>}/>
                            <Route path='/stacked' element={<Stacked/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin