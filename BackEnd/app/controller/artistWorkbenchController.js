const db = require("../models");
const Post = db.artistWorkbench;


const addPost = async (req, res) => {
  const info = {
    postId: req.body.postId,
    postName: req.body.postName,
    description: req.body.description,
    images:req.file.filename,
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

}


module.exports = {
  addPost,
  getPosts,
  getPostForSelf
};
