const FacilitiesStatusDb = require('../models').FacilityStatus;

const controller ={

    getAll: async (req,res)=>{
        try{
            const facilitiesStatus = await FacilitiesStatusDb.findAll();
        if(facilitiesStatus){
            res.status(200).send(facilitiesStatus);
        }else{
            res.status(404).send({message:"Facilities status not found!"});
        }
        }catch(err){
            res.status(500).send({message:"Server error!"});
        }
    },
    
    getById: async(req,res)=>{
        try{
            const facilityStatus = await FacilitiesStatusDb.findByPk(req.params.id);
            res.status(200).send(facilityStatus);
        }catch(err){
            res.status(500).send({message:"Server error!"});
        }
    },

    add: async(req,res)=>{
        const{numberOfBalls, condition}=req.body;
        let errors=[];
        if(!numberOfBalls){
            errors.push("Number of balls required!");
        }
        if(!conditon){
            errors.push("Condition required!");
        }
        if(errors.length>0){
            res.status(400).send(errors);
        }

        try{
            const newStatus = await FacilitiesStatusDb.create({
                numberOfBalls, 
                condition,
            });
            res.status(200).send(newStatus);
        }catch(err){
            res.status(500).send({message:"Server error!"});
        }

    }

}

module.exports = controller; 