const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./app/models/");

let corsOptions = {
  origin: "http://localhost:3000",
};

//middleware

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/Images',express.static('./Images'))

//testing apis

const routerArtist = require("./app/routes/artists_routes");
const routerUser = require("./app/routes/userRoutes");
const routerPosts = require("./app/routes/artistPostsRouter");
const routeEvent=require("./app/routes/eventRouter");
const routerTrain=require("./app/routes/trainingRoute");

app.use("/api/artists", routerArtist);

app.use("/api/users", routerUser);

app.use("/api/artistWorkBench", routerPosts);

app.use("/api/events",routeEvent);
app.use("/api/training",routerTrain);

app.get("/", (res) => {
  res.json({ message: "Welcome to Application" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
