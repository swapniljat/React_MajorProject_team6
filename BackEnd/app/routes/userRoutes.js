const userController=require('../controller/userController');

const router=require('express').Router();

router.post('/addUser',userController.addUser);

router.get('/:id',userController.getUserBYId);

module.exports=router;