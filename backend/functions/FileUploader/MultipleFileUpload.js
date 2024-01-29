import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'../uploads')
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now() + "-"+req.body.name
        cb(null,file.fieldname + '-'+ uniqueSuffix + '-' + file.originalname)
    }
})

const fileFilter = (req,file,cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg'){
        cb(null,true)
    } else {
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'),false);
    }
    cb(null,true)
}

const upload = multer({storage:storage,fileFilter:fileFilter}).fields([{name:'mainImage',maxCount:1},{name:'images',maxCount:10}])

export default upload;