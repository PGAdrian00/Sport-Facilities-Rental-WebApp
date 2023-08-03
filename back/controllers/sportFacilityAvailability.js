const SportFacilitiesAvailabilityDb = require("../models").SportFacilityAvailability;
const SportFacilitiesDb = require("../models").SportFacility;
const RentalsDb = require("../models").Rental;


const controller = {

getAll:(req,res)=>{
    SportFacilitiesAvailabilityDb.findAll({
        include:[{model: SportFacilitiesDb}, {model: RentalsDb}]
    })
.then((sportFacilityAvailabilities)=>{
    res.status(200).send(sportFacilityAvailabilities);
})
.catch((err)=>{
    console.log(err);
    res.status(500).send({message:"Server error!"});
});
},

getById: async(req,res)=>{
    try{
        const availability=await SportFacilitiesAvailabilityDb.findByPk(req.params.id);
        if(availability){
            res.status(200).send(availability);
        }else{
            res.status(404).send({message:"Availability not found in db!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).send({message:"Server error"});
    }
},

add: async(req,res)=>{
const{date, start_time, end_time, available}= req.body;

const id = req.params.id;
try{
    const sportFacility = await SportFacilitiesDb.findByPk(id);
    console.log(id);
    let errors = [];
    if(!sportFacility){res.status(404).send("Sport facility not found!");}

    
    if(!date){
        errors.push("Date required!");
    }
    if(!start_time){
        errors.push("Start time required!")
    }
    if(!end_time){
        errors.push("End time required!");
    }
    if(!available){
        errors.push("Available required!")
    }
    if (errors.length > 0) {
        return res.status(400).json({ errors });}
        else{
            const facilityAvailability ={
                date, 
                start_time, 
                end_time, 
                available,
                SportFacilityId: id
            
            };

            const newFacilityAvailability = await SportFacilitiesAvailabilityDb.create(facilityAvailability);
            res.status(200).send(newFacilityAvailability);
        }
}catch(err){
    console.log(err);
    res.status(500).send('Server error');
}


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
},

rentThePlace: async(req,res) => {
const{id,userId}=req.params;

console.log(id);
console.log(userId);

try{
    const availability=await SportFacilitiesAvailabilityDb.findByPk(id);

const facility = await SportFacilitiesDb.findByPk(availability.SportFacilityId);



await availability.update({
    ...availability,
    available: 0
});
try{
    const newRental = await RentalsDb.create({
    start_date: availability.date,
    end_date: availability.date,
    totalCost: facility.price_per_hour,
    status: "submitted",
    UserId: userId,
    SportFacilityAvailabilityId: id
    });
    res.status(201).send(newRental);
}
catch(err){
    console.log(err);
    res.status(500).send({message:"Server error!"});
}

}catch(err){
    console.log(err);
    res.status(500).send({message:"Server error"});
}
}




}

module.exports = controller;