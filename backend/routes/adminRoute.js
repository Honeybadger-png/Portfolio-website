import express from "express";
import {getAllTasks,getTask,createTask} from "../controllers/TaskController.js";
import { uploadMultipleFiles,uploadFile,createProject,dummyCreateProject,getProjects } from "../controllers/Projectcontroller.js"

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
        const uniqueSuffix = Date.now() + "-"+req.body.name
        cb(null,file.fieldname + '-'+ uniqueSuffix + '-' + file.originalname)
    
    }
})
const upload = multer({storage:storage,fileFilter:fileFilter}).fields([{name:'mainImage',maxCount:1},{name:'files',maxCount:10}]);




router.route('/').get(getAllTasks);
router.route('/create').post(createTask)
router.route('/fileUpload').post(uploadMultipleFiles,uploadFile)
router.post('/uploadFile',function(req,res,next){
    console.log(req.body);
    upload(req,res,function(err){
        if(err){
            return res.end("error uploading")
        }
        res.end("file is uploaded")
    })

})
router.post('/createProject',createProject)
router.get('projects',getProjects)
router.post('/dummyCreateProject',dummyCreateProject);

router.route('/:id').get(getTask);

export default router;