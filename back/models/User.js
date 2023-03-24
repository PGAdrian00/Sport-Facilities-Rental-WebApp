module.exports=(sequelize,DataTypes)=>{
  return sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true,
          autoIncrement: true,allowNull: false },
   
    email: {type: DataTypes.STRING, allowNull: false, unique: true },

    password: { type: DataTypes.STRING, allowNull: false },

    name: {type: DataTypes.STRING,allowNull: false},

    role: { type: DataTypes.ENUM('client', 'facility_owner', 'observer'),
              defaultValue:'observer',allowNull: false}
  });
};

  // User.associate = function(models){
  //   //user has many sport facilities (as owner)
  //   User.hasMany(models.SportFacility,{
  //     as:'owned_facilities',
  //     foreignKey:{
  //       name:'owner_id',
  //       allowNull:false,
  //     },
  //     onDelete:'CASCADE'
  //   });

  //   //user has many rentals (as client)
  //   User.hasMany(models.Rental, {
  //     as:'rentals',
  //     foreignKey:{
  //       name:'client_id',
  //       allowNull:false,
  //     },
  //     onDelete:'CASCADE'
  //   });
  // };

  //method to get the sport facilities that the user owns

  // User.prototype.getOwnedFacilities = async function(){
  //   const facilities = await sequelize.models.SportFacility.scope('facility_owner').findAll({
  //     where:{
  //       ownerId: this.id,
  //     },
  //   });
  //   return facilities;
  // };


    
      
     




