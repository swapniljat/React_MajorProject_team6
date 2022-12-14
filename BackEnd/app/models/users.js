
module.exports=(sequelize,DataTypes)=>{
    return sequelize.define("users_info",{
        userId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNUll:false
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        contact:{
            type:DataTypes.STRING,
            unique:true,
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{timestamps:false});
};