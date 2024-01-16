
const getAllTasks = (req, res) => {
    res.send('All items')
}

const getTask = (req,res)=>{
    res.send('Single item')
}

export default {getAllTasks,getTask};