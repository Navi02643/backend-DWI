const userModel = require("./models/user");

async function saveUser(user) {
  const dataUser = new userModel(user);
  const newUser = await dataUser.save();
  return newUser;
}

async function findUser(user) {
  const findUser = await userModel.findOne({
    email: `${user.email}`,
    password: `${user.password}`,
  });
  return findUser;
}

module.exports = { saveUser, findUser };
