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

    },

updateById: async(req,res)=>{

    const{id}=req.params.id;
    try{
        const status = FacilitiesStatusDb.findByPk(id);
        if(status){
            await status.update(req.body);
            res.status(200).send({message:"Rental updated successfully!"});

        }else{
            res.status(404).send({message:"Rental not found!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).send({message:"Server error!"});
    }
}
    ,

    deleteById: (req, res)=>{
        const facilityStatusId = req.params.id;
        FacilitiesStatusDb.destroy({where:{id: facilityStatusId}})
        .then((result)=>{
            if(result){
            res.status(200).send({message:"Facility status with ${id} has been successfully deleted!"});
        }else{
            res.status(404).send({message:"Facility status with ${id} not found!"});
        }
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).send({message:"Error deleting facility status with id ${id}"});
        })
    }

}

module.exports = controller; 