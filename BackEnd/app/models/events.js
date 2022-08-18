
module.exports=(sequelize,DataTypes)=>{
 return sequelize.define("events",{
    eventId:{
        type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        eventName:{
<<<<<<< HEAD
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        eventImages:{
            type:DataTypes.STRING,
            allowNull:false
=======
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        eventImages:{
            type:DataTypes.STRING
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7
        }
 },{timestamps:false});   
};