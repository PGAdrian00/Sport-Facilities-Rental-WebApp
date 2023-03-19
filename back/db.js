const Sequelize = require('sequelize');
const sequelize = new Sequelize('express_db_test','root','',{
    dialect:'mysql',
    host:'localhost',
    define:{
        timestamp:true
    }
});

module.exports = sequelize;
