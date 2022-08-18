const db=require('../models');
const Events=db.events;


const addEvent=async(req,res)=>{
    const info={
        eventId:req.body.eventId,
        eventName:req.body.eventName,
        description:req.body.description,
        eventImages:req.body.eventImages,
        artistId: req.body.artistId,
      };

    const event=await Events.create(info);
    res.status(200).send(event);
    console.log(event);
};

const getEvents = async (req,res) => {
    let post = await Events.findAll({});
    res.status(200).send(post);
  };

  const getEventForSelf=async(req,res)=>{
    let id=req.params.id;
    let events=await Events.findAll({where:{artistId:id}});
    res.status(200).send(events);
  
  }

  module.exports={
    addEvent,
    getEvents,
    getEventForSelf
  };