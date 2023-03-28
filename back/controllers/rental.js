const RentalsDb = require('../models').Rental;

const controller ={
getAll: async (req,res) => {
    try{
        const rentals = await RentalsDb.findAll();
        res.status(200).send(rentals);
    }catch(err){
        console.log(err);
        res.status(500).send({message:"Server error!"});
    }
},

getById: async (req,res)=>{
    const{id}=req.params.id;
    try{
        const rental = await RentalsDb.findByPk(id);
        if(rental){
            res.status(200).send(rental);
        }else{
            res.status(404).send({message:"Rental not found!"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({message:"Server error"})
    }
},

add: async(req,res)=>{
    const{start_date, end_date,totalCost,status}=req.body;
    let errors =[];
    if(!start_date){
        errors.push("Start date required!");
    }
    if (!end_date) {
        errors.push("End date is required");
    }
    if (!totalCost) {
        errors.push("Total cost is required");
    }
    if (!status) {
        errors.push("Status is required");
    }

    if (start_date && isNaN(Date.parse(start_date))) {
        errors.push("Invalid start date format. Expected ISO date string.");
      }
      if (end_date && isNaN(Date.parse(end_date))) {
        errors.push("Invalid end date format. Expected ISO date string.");
      }

      if (typeof totalCost !== "number") {
        errors.push("Total cost must be a number");
      }

      const allowedStatusValues = ["submitted", "approved", "declined"];
    if (!allowedStatusValues.includes(status)) {
      errors.push(
        `Invalid status value. Expected one of: ${allowedStatusValues.join(
          ", "
        )}`
      );
    }

    if(errors.length >0){
        res.status(400).send(errors);
    }

    try{
        const newRental = await RentalsDb.create({
            start_date,
            end_date,
            totalCost,
            status,
        });
        res.status(201).send(newRental);
    }
    catch(err){
        console.log(err);
        res.status(500).send({message:"Server error!"});
    }
},

updateById: async(req,res)=>{
    const{id}=req.params.id;
    try{
        const rental = RentalsDb.findByPk(id);
        if(rental){
            await rental.update(req.body);
            res.status(200).send({message:"Rental updated successfully!"});

        }else{
            res.status(404).send({message:"Rental not found!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).send({message:"Server error!"});
    }
},
deleteById: async(req,res)=>{
    try{
        const rental = await RentalsDb.findByPk(req.params.id);
        if(rental){
            await RentalsDb.destroy();
            res.status(500).send({message:"Rental updated successfully!"});
        }else{
            res.status(404).send({message:"Rental not found!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).send({message:"Server error!"});
    }
}
}

module.exports = controller;