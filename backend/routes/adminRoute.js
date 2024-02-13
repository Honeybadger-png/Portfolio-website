import express from "express";
import {getAllTasks,getTask,createTask} from "../controllers/TaskController.js";
import { uploadMultipleFiles,uploadFile,createProject,dummyCreateProject,getProjects,getProject } from "../controllers/Projectcontroller.js"
import Project from '../models/Project.js';

import multer from 'multer';

const router = express.Router();




const fileFilter = (req,file,cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg'){
        cb(null,true)
    } else {
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'),false);
    }
    cb(null,true)
}

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        if (file.fieldname === 'mainImage'){
            cb(null,'../frontend_react/uploads/mainImages')
        }else if (file.fieldname === 'files'){
            cb(null,'../frontend_react/uploads/images')
        }else{
            cb(null,'../frontend_react/uploads/other')
        }
    },
    filename: function(req,file,cb){
        const uniqueSuffix = req.body.projectName + "-"+req.body.uniqueId
        cb(null,file.fieldname + '-'+ uniqueSuffix + '-' + file.originalname)
    
    }
})
const upload = multer({storage:storage,fileFilter:fileFilter}).fields([{name:'mainImage',maxCount:1},{name:'files',maxCount:10}]);




router.route('/').get(getAllTasks);
router.route('/create').post(createTask)
router.route('/fileUpload').post(uploadMultipleFiles,uploadFile)
router.post('/uploadFile',async function(req,res,next){
   
    upload(req,res,function(err){
        if(err){
            console.log(err);
            return res.status(500).json({message:err.message})
        }
        res.status(200).json({message:"Files uploaded successfully",files:req.files})
    })
    
})
router.post('/createProject',createProject)
router.post('/dummyCreateProject',dummyCreateProject);
router.get('/projects',getProjects)
router.get('/project',getProject)

router.route('/:id').get(getTask);

export default router;