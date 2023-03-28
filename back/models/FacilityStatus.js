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



