module.exports=(sequelize,DataTypes)=>{
    return sequelize.define("artistPosts",{
        postId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        postName:{
<<<<<<< HEAD
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        images:{
            type:DataTypes.STRING,
            allowNull:false
        }
=======
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        images:{
            type:DataTypes.STRING
        }
        
        // ,
        // artistId:{
        //     type:DataTypes.INTEGER,
        //     references:{
        //         model:"artists",
        //         key:artistId
        //     }
        // }
>>>>>>> 03d213b32873fa9ba55862317133824d1147cbf7
    },{timestamps:false});
};