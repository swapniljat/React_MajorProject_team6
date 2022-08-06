module.exports=(sequelize,DataTypes)=>{
    return sequelize.define("artistPosts",{
        postId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        postName:{
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
    },{timestamps:false});
};