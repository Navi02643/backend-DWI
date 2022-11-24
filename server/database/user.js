const userModel = require("./models/user");

async function saveUser(user) {
  const dataUser = new userModel(user);
  const newUser = await dataUser.save();
  return newUser;
}

async function findEmail(email) {
  const userFind = await userModel.findOne({ email });
  return userFind;
}

async function updatePassword(id, password) {
  const updateUser = await userModel.findByIdAndUpdate(
    id,
    { $set: {password: password} },
  );
  return updateUser;
}

module.exports = { saveUser, findEmail, updatePassword};
