const Sequelize = require('sequelize');
const db = require('../config/db');
const UserModel = require('./User');
const SportFacilityModel=require('./SportFacility');
const SportFacilityAvailabilityModel=require('./SportFacilityAvailability');
const FacilityStatusModel=require('./FacilityStatus');
const RentalModel=require('./Rental');
const PaymentModel=require('./Payment');

const User = UserModel(db, Sequelize);
const SportFacility=SportFacilityModel(db, Sequelize);
const SportFacilityAvailability=SportFacilityAvailabilityModel(db, Sequelize);
const FacilityStatus=FacilityStatusModel(db, Sequelize);
const Rental=RentalModel(db, Sequelize);
const Payment=PaymentModel(db, Sequelize);


User.hasMany(SportFacility,
    {
        foreignKey:{
            name:'facility_owner_id',
            allowNull:false
        },
    
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
});
SportFacility.belongsTo(User,{
    foreignKey:{
        name:"facility_owner_id",
        allowNull:false
    }
});

User.hasMany(Rental,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
});
Rental.belongsTo(User);

SportFacility.hasMany(SportFacilityAvailability,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
});
SportFacilityAvailability.belongsTo(SportFacility);

SportFacilityAvailability.hasMany(Rental,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
});
Rental.belongsTo(SportFacilityAvailability);

SportFacility.hasOne(FacilityStatus);
FacilityStatus.belongsTo(SportFacility);

Rental.hasOne(Payment);
Payment.belongsTo(Rental);

module.exports ={
    connection: db,
    User,
    SportFacility,
    SportFacilityAvailability,
    FacilityStatus,
    Rental,
    Payment,
};