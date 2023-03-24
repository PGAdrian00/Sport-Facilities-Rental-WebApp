const sequelize = require("../db");


    const Rental= sequelize.define('Rental',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        start_time:{
            type:DataTypes.DATE,
            allowNull:false
        },
        end_time:{
            type:DataTypes.DATE,
            allowNull:false
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM('pending', 'paid', 'cancelled'),
            allowNull:false,
            defaultValue:'pending'
        }
    })
    
module.exports=Rental;