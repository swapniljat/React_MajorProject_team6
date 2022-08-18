const artist_controller=require('../controller/artists_controller');

const router=require('express').Router();

router.post('/addArtist',artist_controller.addArtist);

router.get('/:id',artist_controller.getArtistById);
<<<<<<< HEAD
router.post('/login',artist_controller.signInArtist);
=======
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7
module.exports=router;