const db = require("../models");
const Post = db.artistWorkbench;
<<<<<<< HEAD
const multer=require('multer');
const path=require('path');
=======
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7


const addPost = async (req, res) => {
  const info = {
    postId: req.body.postId,
    postName: req.body.postName,
    description: req.body.description,
<<<<<<< HEAD
    // images:req.file.path,
    images:req.body.images,
=======
    images:req.file.filename,
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7
    artistId: req.body.artistId,
  };

  const posts = await Post.create(info);
  res.status(200).send(posts);
  console.log(posts);
};

const getPosts = async (req,res) => {
  let poster = await Post.findAll({});
  res.status(200).send(poster);
};

const getPostForSelf=async(req,res)=>{
  let id=req.params.id;
  let artistWorkbench=await Post.findAll({where:{artistId:id}});
  res.status(200).send(artistWorkbench);
<<<<<<< HEAD
}




// const storage=multer.diskStorage({
//    destination:(req,file,cb)=>{
//     cb(null,'Images')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+path.extname(file.originalname))
//    }
// });

// const upload= multer({
//     storage:storage,
//     limits:{fileSize:'3000000'},
//     fileFilter:(req,file,cb)=>{
//         const fileTypes= /jpeg|jpg|png|gif|webp|jfif/
//         const mimeType=fileTypes.test(file.mimetype)
//         const extname=fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname){
//             return cb(null,true)
//         }
//         cb("Give proper format")
//     }
// }).single('images')
=======

}

>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7

module.exports = {
  addPost,
  getPosts,
<<<<<<< HEAD
  getPostForSelf,
  // upload
=======
  getPostForSelf
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7
};
