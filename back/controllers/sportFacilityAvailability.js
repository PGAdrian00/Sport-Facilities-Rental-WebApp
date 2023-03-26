const SportFacilityAvailabilityDb = require("../models").SportFacilityAvailability;
const SportFacilitiesDb = require("../models").SportFacility;

const controller = {

getAll:(req,res)=>{
    SportFacilityAvailabilityDb.findAll()
    .then((sportFacilityAvailabilities)=>{
        res.status(200).send(sportFacilityAvailabilities);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({message:"Server error!"});
    });
},

add: async(req,res)=>{
    const{date, start_time, end_time, available}= req.body;

    const newFacilityAvailability ={
        date, 
        start_time, 
        end_time, 
        available

    }

    await SportFacilityAvailabilityDb.create({newFacilityAvailability})
        .then((sportFacilityAvailability)=>{
            res.status(201).send(sportFacilityAvailability);
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).send({message:"Error on adding sport facility!"});
        })
    
},

update: (req,res)=>{
    const{sportFacilityAvailabilityId}=req.params;
    const{date, start_time,end_time,available}=req.body;
    SportFacilityAvailabilityDb.update(
        {
            date,
            start_time,
            end_time,
            available,
        },
        {where:{id: sportFacilityAvailabilityId}})
        .then((result)=>{
            if(result[0]){
                res.status(200).send({message:"Sport facility availability with ${sportFacilityAvailabilityId} has been successfully updated!"})
        }else{
            res.status(404).send({message:"Sport facility availability with ${sportFacilityAvailabilityId} not found!"})
        }
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).send({message:"Error updating sport facility availability with id ${sportFacilityAvailabilityId}!"});
        })
},
delete:(req,res)=>{
    const{sportFacilityAvailabilityId}=req.params;
    SportFacilityAvailabilityDb.destroy(
        {where:{
            id:sportFacilityAvailabilityId
        }})
        .then((result)=>{
            if(result){
                res.status(200).send({message:"Sport facility availability with id ${sportFacilityAvailabilityId} deleted successfully!"});
            }else{
                res.status(404).send({message:"Sport facility availability with id ${sportFacilityAvailabilityId} not found!"});
            }
        })
        .catch((err)=>{
            console.log(err);
        res.status(500).send({message:"Error on deleting sport facility availability!"});
        })
}


}

module.exports = controller;