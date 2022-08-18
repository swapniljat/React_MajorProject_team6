const trainingController=require('../controller/trainingController');
<<<<<<< HEAD
// const multer=require('multer');
// const path=require('path');

// const storage=multer.diskStorage({
//     destination:'./app/trImages',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);

//     }
// });

// const upload=multer({
//     storage:storage
// })

const router=require('express').Router();

router.post('/addTrainings',trainingController.addTrainings);
=======
const multer=require('multer');
const path=require('path');

const storage=multer.diskStorage({
    destination:'./app/trImages',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);

    }
});

const upload=multer({
    storage:storage
})

const router=require('express').Router();

router.post('/addTrainings',upload.single('trImages'),trainingController.addTrainings);
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7

router.get('/getTraining',trainingController.getTraining);
router.get('/getTrainForSelf/:id',trainingController.getTrainForSelf);

module.exports=router;