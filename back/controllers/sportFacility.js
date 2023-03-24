const SportFacilitiesDb = require('../models').SportFacility;


const controller = {

    getAllSportFacilities: (req,res)=>{
        SportFacilitiesDb.findAll()
    },

    addSportFacility: (req,res)=>{
        const{name} = req.body;
        SportFacilitiesDb.create({name})
            .then((sportFacility)=>{
                res.status(201).send(sportFacility);
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).send({message:'Error on adding sport facility!'})
            })
    }
}

module.exports = controller;