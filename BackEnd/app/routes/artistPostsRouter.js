const artistWorkbenchController = require("../controller/artistWorkbenchController");
<<<<<<< HEAD


const router = require("express").Router();

router.post("/addPost",artistWorkbenchController.addPost);
=======
const multer=require('multer');
const path=require('path');

const storage=multer.diskStorage({
    destination:'./app/images/',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload= multer({
    storage:storage
})

const router = require("express").Router();

router.post("/addPost", upload.single('images'),artistWorkbenchController.addPost);
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7
router.get("/getPosts", artistWorkbenchController.getPosts);
router.get("/getSelfPosts/:id",artistWorkbenchController.getPostForSelf);

module.exports = router;
