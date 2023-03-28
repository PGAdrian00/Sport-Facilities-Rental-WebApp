const PaymentsDb = require('../models').Payment;

const controller = {
getAll:async(req,res)=>{
    try{
    const payments = await PaymentsDb.findAll();
    if(payments){
        res.status(200).send(payments);
    }}
    catch(err){
        console.log(err);
        res.status(500).send({message:"Server error!"});
    }
},

getById: async(req,res)=>{
    try{
        const payment = await PaymentsDb.findByPk(req.params.id);
        if(payment){
            res.status(200).send(payment);
        }else{
            res.status(404).send({message:"Payment not found!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).send({message:"Server error!"});
    }
},

updateById: async(req,res)=>{
    try{
        const payment = PaymentsDb.findByPk(req.params.id);
        if(payment){
            await payment.update(req.body);
            res.status(200).send("Payment updated successfully!");
        }else{
            res.status(404).send({message:"Payment not found!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).send({message:"Server error!"});
    }

},

deleteById: (req, res)=>{
    const paymentId = req.params.id;
    PaymentsDb.destroy({where:{id: paymentId}})
    .then((result)=>{
        if(result){
        res.status(200).send({message:"Payment with ${id} has been successfully deleted!"});
    }else{
        res.status(404).send({message:"Payment with ${id} not found!"});
    }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({message:"Error deleting payment with id ${id}"});
    })
}


};

module.exports = controller;