const db = require("../models");
const Users = db.users;
const sessionStorage=require('sessionstorage')

const addUser = async (req, res) => {
  const info = {
    userId: req.body.userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    address: req.body.address,
    contact: req.body.contact,
    email: req.body.email,
    password: req.body.password,
  };

  const users = await Users.create(info);
  res.status(200).send(users);
  console.log(users);
};

const getUserBYId = async (req, res) => {
  let id = req.params.id;
  let user = await Users.findOne({ where: { userId: id } });
  res.status(200).send(user);
};

//signin
const signInUser = async (req, resp) => {
  let email = req.body.email
  let password = req.body.password;
  const user = await Users.findOne({ where: { email: email } })
  if (email == user.email && password == user.password) {
      sessionStorage.setItem('email', email)
      resp.send("Successfully logged in")
      console.log(sessionStorage.getItem('email'));
  }
  else{
      resp.send("you are not registered...")
  }
  //resp.status(200).send(sessionStorage.getItem("email"))
}

module.exports = {
  addUser,
  getUserBYId,
  signInUser
};
