const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.artists = require("./artists.js")(sequelize, DataTypes);
db.users = require("./users")(sequelize, DataTypes);
db.artistWorkbench = require("./artistWorkbench")(sequelize, DataTypes);
db.events = require("./events")(sequelize, DataTypes);
db.training=require("./training")(sequelize,DataTypes);

//relation between artist and artistWorkbench
db.artists.hasMany(db.artistWorkbench, {
  foreignKey: "artistId",
  as: "artists",
});
db.artistWorkbench.belongsTo(db.artists, {
  foreignKey: "artistId",
  as: "artistswb",
});

db.artists.hasMany(db.events, {
  foreignKey: "artistId",
  as: "artistsev",
});
db.events.belongsTo(db.artists, {
  foreignKey: "artistId",
  as: "artistsevs",
});

db.artists.hasMany(db.training, {
  foreignKey: "artistId",
  as: "artisttr",
});
db.training.belongsTo(db.artists, {
  foreignKey: "artistId",
  as: "artisttrs",
});


db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done");
});
module.exports = db;
