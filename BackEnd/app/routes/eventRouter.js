const eventController=require('../controller/eventController');
const multer=require('multer');
const path=require('path');

const storage=multer.diskStorage({
    destination:'./app/eventImages',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload=multer({
    storage:storage
})

const router=require('express').Router();

router.post('/addEvent',upload.single('eventImages'),eventController.addEvent);

router.get('/getEvent',eventController.getEvents);

router.get('/getEventForSelf/:id',eventController.getEventForSelf);


module.exports=router;