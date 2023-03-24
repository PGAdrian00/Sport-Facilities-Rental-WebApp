const{DataTypes}=require('sequelize')

module.exports = (sequelize, DataTypes)=>{
  return sequelize.define(
    'SportFacility',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          sport_type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          location:{
            type:DataTypes.GEOMETRY('POINT'),
            allowNull:false,
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          is_indoor: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
          has_night_lights: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
          price_per_hour: {
            type: DataTypes.FLOAT,
            allowNull: false,
          }
          
        },
        {
          freezeTableName:true,
          tableName:'SportFacilities'
        }
        );
      }

// SportFacility.associate = function(models){
//   SportFacility.belongsTo(models.User, {
//     //sport facility belongs to one user
//     as:'owner',
//     foreignKey:{
//       name:'owner_id',
//       allowNull:false,
//     },
//     onDelete:'CASCADE'
//   });

//   //a facility has one facility status

//   SportFacility.hasOne(models.FacilityStatus, {
//     as:'status',
//     foreignKey:{
//       name: 'facility_id',
//       allowNull:false,
//     },
//     onDelete:'CASCADE'
//   });

//   // facility has many availability entries
//   SportFacility.hasMany(models.SportFacilityAvailability, {
//     as:'availability',
//     foreignKey:{
//       name:'facility_id',
//       allowNull:false,
//     },
//     onDelete:'CASCADE'
//   });
//   //facility has many rentals
//   SportFacility.hasMany(models.Rental,{
//     as:'rentals',
//     foreignKey:{
//       name:'facility_id',
//       allowNull:false,
//     },
//     onDelete:'CASCADE'
//   });
// }
//   //access restriciton for facility owners only
//   SportFacility.addScope('facility_owner', {
//     include:[{
//       model: sequelize.models.User,
//       as:'owner',
//       where:{
//         type:'facility_owner',
//       },
//     }],
//   });
  