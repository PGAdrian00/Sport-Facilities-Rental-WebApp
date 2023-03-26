const SportFacilitiesDb = require('../models').SportFacility;
const UserDB = require('../models').User;

const controller = {

getAll: (req,res)=>{
    SportFacilitiesDb.findAll({include:[{model:UserDB}]})
    .then((facilities=>{
        res.status(200).send(facilities);
    }))
    .catch((err)=>{
        console.log(err);
        res.status(500).send({message:"Server error!"});
    });
    
},

add: async (req,res)=>{
    const{ name, description, sport_type, location, address, is_indoor, has_night_lights, price_per_hour} = req.body;
    
    let errors = [];

if (!name) {
errors.push('Name is required');
}
if (!description) {
errors.push('Description is required');
}
if (!sport_type) {
errors.push('Sport type is required');
}
if (!location) {
errors.push('Location is required');
}
if (!address) {
errors.push('Address is required');
}
if (is_indoor === undefined) {
errors.push('Indoor/Outdoor is required');
}
if (has_night_lights === undefined) {
errors.push('Night lights availability is required');
}
if (!price_per_hour) {
errors.push('Price per hour is required');
}

if (errors.length > 0) {
return res.status(400).json({ errors });
}else
{

    const newFacility ={
        name, 
        description, 
        sport_type, 
        location, address, 
        is_indoor, 
        has_night_lights, 
        price_per_hour
    }
        
            await SportFacilitiesDb.create({newFacility})
            .then((sportFacility)=>{
                res.status(201).send(sportFacility);
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).send({message:'Error on adding sport facility!'})
            })
    }
},

update: (req,res)=>{
    const{sportFacilityId}=req.params.id;
    const{name, description, sport_type, location, address, is_indoor, has_night_lights, price_per_hour}=req.body;

    SportFacilitiesDb.update(
        {
            name, 
            description, 
            sport_type, 
            location, 
            address, 
            is_indoor, 
            has_night_lights, 
            price_per_hour
        },
        {where:{id: sportFacilityId}}
    )
    .then((result)=>{
        if(result[0]){{}
        res.status(200).send({message:"Sport facility with ${sportFacilityId} has been successfully updated!"});
    }else{
        res.status(404).send({message:"Sport facility with ${sportFacilityId} not found!"});
    }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({message:"Error updating sport facility with id ${sportFacilityId}!"});
    })
},

delete: (req, res)=>{
    const sportFacilityId = req.params.id;
    SportFacilitiesDb.destroy({where:{id: sportFacilityId}})
    .then((result)=>{
        if(result){
        res.status(200).send({message:"Sport facility with ${id} has been successfully deleted!"});
    }else{
        res.status(404).send({message:"Sport facility with ${id} not found!"});
    }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({message:"Error deleting sport facility with id ${id}"});
    })
}
}

module.exports = controller;