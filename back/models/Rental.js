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
    
// Rental.associate = function(models){
//     //a rental belongs to a client who rented the sport facility
//     Rental.belongsTo(models.User,{
//         foreignKey:{
//             name:'client_id',
//             allowNull:false,
//         },
//         onDelete:'CASCADE'
//     });

//     //rental belongs to sport facility
//     Rental.belongsTo(models.SportFacility, {
//         foreignKey:{
//             name:'facility_id',
//             allowNull:false,
//         },
//         onDelete:'CASCADE'
//     });
// };
