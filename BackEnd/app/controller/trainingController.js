const db=require("../models");
const Training=db.training;

const addTrainings=async(req,res)=>{
    const info={
        trId:req.body.trId,
        trainingSub:req.body.trainingSub,
        description:req.body.description,
        newBatch:req.body.newBatch,
        trImages:req.body.trImages,
        artistId:req.body.artistId
    }

    const trainings=await Training.create(info);
    res.status(200).send(trainings);
    console.log(trainings);
};

const getTraining=async(req,res)=>{
    let train=await Training.findAll({});
    res.status(200).send(train);
};


const getTrainForSelf=async(req,res)=>{
    let id=req.params.id;
    let training=await Training.findAll({where:{artistId:id}});
    res.status(200).send(training);
  
  }

module.exports={
    addTrainings,
    getTraining,
    getTrainForSelf
}

