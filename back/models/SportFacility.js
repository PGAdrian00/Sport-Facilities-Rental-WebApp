const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require('./User');


    const SportFacility= sequelize.define('SportFacility', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: true
          },
          sport_type: {
            type: DataTypes.STRING,
            allowNull: false
          },
          latitude: {
            type: DataTypes.DECIMAL(10, 8),
            allowNull: false
          },
          longitude: {
            type: DataTypes.DECIMAL(11, 8),
            allowNull: false
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false
          },
          is_indoor: {
            type: DataTypes.BOOLEAN,
            allowNull: false
          },
          has_night_lights: {
            type: DataTypes.BOOLEAN,
            allowNull: false
          },
          price_per_hour: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
          }
          
        });

//SportFacility.belongsTo(User); how can I make it so that it belongs only to the users that are Facility Owners

module.exports=SportFacility;