const db = require("../models");
const Users = db.users;

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

module.exports = {
  addUser,
  getUserBYId,
};
