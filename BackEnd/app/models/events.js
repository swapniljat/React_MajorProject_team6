
module.exports=(sequelize,DataTypes)=>{
 return sequelize.define("events",{
    eventId:{
        type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        eventName:{
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
        }
 },{timestamps:false});   
};