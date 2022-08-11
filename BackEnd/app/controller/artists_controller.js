const db=require("../models");
const Artists=db.artists;

const addArtist= async(req,res)=>{
   
    const info={
        artistId:req.body.artistId,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        artCategory:req.body.artCategory,
        gender:req.body.gender,
        address:req.body.address,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password
    };
    
    const artist=await Artists.create(info)
    res.status(200).send(artist)
    console.log(artist);
};

const getArtistById=async(req,res)=>{
    let id=req.params.id;
    let artist=await Artists.findOne({where:{artistId:id}});
    res.status(200).send(artist);

}

module.exports={
    addArtist
    ,getArtistById
}