const connection = require('../models').connection;

const controller = {
    resetDb: (req,res)=>{
        console.log('IS IN FUNCTION');
        connection
        .sync({force:true})
        .then(()=>res.status(201).send({message:"Database created!"}))
        .catch((err)=>{
            console.log(err);
            res.status(500).send({message:"Error when reseting database!"});
        });
    },
    isLoggedIn: (req,res,next)=>{
        if(req.user){
            next();
        }else{
            res.status(401).send("You are not logged in!");
        }
    }
};

module.exports = controller;