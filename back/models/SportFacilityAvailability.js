const sequelize = require("../db");


    const SportFacilityAvailability= sequelize.define("SportFacilityAvailability",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
  },
          
          start_time: {
            type: DataTypes.TIME,
            allowNull: false
          },
          end_time: {
            type: DataTypes.TIME,
            allowNull: false
          },
          available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
          }

    });

    module.exports=SportFacilityAvailability;