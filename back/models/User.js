const { DataTypes } = require("sequelize");
const sequelize = require("../db");



const User=sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('client', 'facility owner', 'observer'),
      allowNull: false
    }
  });
  
module.exports = User;

    
      
     




