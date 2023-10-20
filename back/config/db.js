const Sequelize = require('sequelize');
const config = require("./config");
const {database, host, user, password}=config.database;


const sequelize = new Sequelize(database,user,password,{
    dialect:'mysql',
    host:host,
    define:{
        timestamp:true
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
