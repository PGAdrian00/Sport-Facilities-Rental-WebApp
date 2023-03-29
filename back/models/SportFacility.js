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

