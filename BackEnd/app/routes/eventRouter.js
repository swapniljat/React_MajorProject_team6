const eventController=require('../controller/eventController');
<<<<<<< HEAD
// const multer=require('multer');
// const path=require('path');

// const storage=multer.diskStorage({
//     destination:'./app/eventImages',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });

// const upload=multer({
//     storage:storage
// })

const router=require('express').Router();

router.post('/addEvent',eventController.addEvent);
=======
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
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7

router.get('/getEvent',eventController.getEvents);

router.get('/getEventForSelf/:id',eventController.getEventForSelf);


module.exports=router;