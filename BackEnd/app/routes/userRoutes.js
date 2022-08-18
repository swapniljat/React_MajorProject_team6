const userController=require('../controller/userController');

const router=require('express').Router();

router.post('/addUser',userController.addUser);

router.get('/:id',userController.getUserBYId);

<<<<<<< HEAD
router.post('/signInUser',userController.signInUser);

=======
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7
module.exports=router;