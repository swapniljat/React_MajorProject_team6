const artistWorkbenchController = require("../controller/artistWorkbenchController");


const router = require("express").Router();

router.post("/addPost",artistWorkbenchController.addPost);
router.get("/getPosts", artistWorkbenchController.getPosts);
router.get("/getSelfPosts/:id",artistWorkbenchController.getPostForSelf);

module.exports = router;
