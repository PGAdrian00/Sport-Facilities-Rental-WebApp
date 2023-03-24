const UsersDb = require('../models').User;

const controller= {
    addUser: async (req,res)=>{
        const user = {
            email: req.body.email,
        };
        let err = false;
        if(!user.email){
            res.status(400).send({message:"Email must be completed!"});
            err=true;
        }
        if(!user.email.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ){
            res.status(400).send({message:"Invalid email!"});
            err = true;
        }
        await UsersDb.findOne({
            where: {
                email: user.email,
            },
        })
        .then((findUser)=>{
            if(findUser){
                err=true;
                throw new Error("Email is already used by another user!");
            }
        })
        .catch((error)=>{
            console.log(error);
            res.status(400).send({message:"Email already inserted in db!"});
        });

        if(!err){
            await UsersDb.create(user)
            .then((newUser)=>{
                res.status(201).send(newUser);
            })
            .catch((error)=>{
                console.log(error);
                res.status(500).send({message:"Error upon insertion of user!"});
            });
        }
    },


    getAll: async (res,req)=>{
        await UsersDb.findAll()
        .then((users)=>res.status(200).send(users))
        .catch(()=>{
            res.status(500).send({message:"Error upon getting users!"});
        });
    }

    

}

module.exports = controller;