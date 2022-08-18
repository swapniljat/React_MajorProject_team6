module.exports=(sequelize,DataTypes)=>{
    return sequelize.define("training",{
        trId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        trainingSub:{
<<<<<<< HEAD
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        trImages:{
            type:DataTypes.STRING,
            allowNull:false
        },
        newBatch:{
            type:DataTypes.STRING,
            allowNull:false
=======
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        trImages:{
            type:DataTypes.STRING
        },
        newBatch:{
            type:DataTypes.STRING
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7
        }
    },{timestamps:false});
};