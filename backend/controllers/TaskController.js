import Task from '../models/Task.js'


export const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
}

export const getAllTasks = (req, res) => {
    res.send('All items')
}

export const getTask = (req,res)=>{
    res.send(`Single item and ${req.params.id}`)
}
