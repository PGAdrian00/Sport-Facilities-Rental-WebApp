module.exports= (sequelize,DataTypes)=>{
    return sequelize.define(
        'Payment',
        {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        amount:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        paymentDate:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        status:{
            type:DataTypes.ENUM('pending','paid','failed'),
            allowNull:false,
            defaultValue:'pending',
        }
    },
    {
      freezeTableName:true,
      tableName:'Payments'
    }
    );
};

    // Payment.associate = function(models){
    //     //a payment belongs to a rental
    //     Payment.belongsTo(models.Rental,{
    //         foreignKey:{
    //             name:'rental_id',
    //             allowNull:false,
    //         },
    //         onDelete:'CASCADE'
    //     });
    // };
