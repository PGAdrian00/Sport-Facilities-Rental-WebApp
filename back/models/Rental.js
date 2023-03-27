const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

module.exports=(sequelize,DataTypes)=>{
    return sequelize.define(
        'Rental',
        {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        start_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        end_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        totalCost:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM('submitted', 'approved', 'declined'),
            allowNull:false,
            
        }
    },
        {
          freezeTableName:true,
          tableName:'Rentals'
        }
        );
};
 