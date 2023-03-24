module.exports = (sequelize,DataTypes)=>{
    return sequelize.define(
        'FacilityStatus',
        {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      numberOfBalls: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      condition: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      
    },
    {
      freezeTableName:true,
      tableName:'FacilitiesStatus'
    }
    );
};

// FacilityStatus.associate = function(models){
//     //a facility status belongs to a sport facility
//     FacilityStatus.belongsTo(models.SportFacility, {
//         foreignKey:{
//             name:'sport_facility_id',
//             allowNull:false,
//         },
//         onDelete:'CASCADE'
//     });

//     //a facility status belongs to a user who is a facility owner
//     FacilityStatus.belongsTo(models.User,{
//         foreignKey:{
//             name:'facility_owner_id',
//             allowNull:false,
//         },
//         constraints:false, //allow null values since not all users may be facility owners
//     });
// };


