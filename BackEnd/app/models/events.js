
module.exports=(sequelize,DataTypes)=>{
 return sequelize.define("events",{
    eventId:{
        type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        eventName:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        eventImages:{
            type:DataTypes.STRING
        }
 },{timestamps:false});   
};