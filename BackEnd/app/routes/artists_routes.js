const artist_controller=require('../controller/artists_controller');

const router=require('express').Router();

router.post('/addArtist',artist_controller.addArtist);

router.get('/:id',artist_controller.getArtistById);
router.post('/login',artist_controller.signInArtist);
module.exports=router;