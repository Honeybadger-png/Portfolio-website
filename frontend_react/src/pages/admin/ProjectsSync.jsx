import React,{useState,useEffect} from 'react'
import { Header } from '../../components/admin'
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter } from '@syncfusion/ej2-react-grids'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProjectsSync = () => {
    const LOCAL_URL = process.env.REACT_APP_LOCAL_URL
    const [projects,setProjects] = useState([])
    let gridInstance;
    
    const navigate = useNavigate()
    const handleClick = ((projectId)=>{
        navigate(`/admin/project/${projectId}`,{state:{projectId:projectId}})
      })

    function gridUrlTemplate(props){
        var src = `project/${props.projectId}`
        return (
            <div>
                <button onClick={(e)=> handleClick(props.projectId)}>Detail</button>
            </div>
        )
    }

    useEffect(() => {
        getProjects()
      },[])


    const getProjects = async () => {
        const response = await axios.get(`${LOCAL_URL}/admin/projects`);
        const data = response.data
        setProjects(data)
        console.log(data)
    }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header category="Page" title='Customers'/>
        <GridComponent dataSource={projects} ref={grid=> gridInstance = grid}>
            <ColumnsDirective>
                <ColumnDirective field='name' headerText='Project Name' width='100' textAlign='Right'/>
                <ColumnDirective field='projectId' headerText='Project Id' width='100' textAlign='Right'/>
                <ColumnDirective field='description' headerText='Project Type' width='100' textAlign='Right'/>
                <ColumnDirective template={gridUrlTemplate} headerText='Project Status' width='100' textAlign='Right'/>
            </ColumnsDirective>
        </GridComponent>
    </div>
  )
}

export default ProjectsSync