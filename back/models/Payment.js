const sequelize = require("../db");


    const Payment= sequelize.define('Payment',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        amount:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM('pending','paid','failed'),
            allowNull:false,
            defaultValue:'pending'
        }
    })
    module.exports=Payment;