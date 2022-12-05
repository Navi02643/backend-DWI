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
  const updateUser = await userModel.findByIdAndUpdate(id, {
    $set: { password: password },
  });
  return updateUser;
}

async function inactivateUser(id) {
  const inactivateUser = await userModel.findByIdAndUpdate(id, {
    $set: { active: false },
  });
  return inactivateUser;
}

async function reactivateUser(id) {
  const activateUser = await userModel.findByIdAndUpdate(id, {
    $set: { active: true },
  });
  return activateUser;
}

async function deleteUser(id) {
  const activateUser = await userModel.findByIdAndDelete(id);
  return activateUser;
}

module.exports = {
  saveUser,
  findEmail,
  updatePassword,
  inactivateUser,
  reactivateUser,
  deleteUser,
};
