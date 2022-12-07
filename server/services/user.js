const userDTO = require("./models/userDTO");
const userDB = require("../database/user");

const bcrypt = require("bcrypt");

async function saveUser(user) {
  const userData = user;
  const userFound = await userDB.findEmail(user.email);
  if (userFound) {
    return "The email is already registered";
  }
  bcrypt.hash(user.password, 10, async (err, hash) => {
    if (err) return err;
    userData.password = hash;
    const userDataSave = await userDB.saveUser(userData);
    return userDataSave;
  });
}

async function userLogin(user) {
  const userFound = await userDB.findEmail(user.email);
  const isCorrectPassword = await bcrypt.compare(
    user.password,
    userFound.password
  );
  if (isCorrectPassword) {
    const successfulLogin = userDTO.loginData(userFound);
    return successfulLogin;
  }
  return "Incorrect email or password";
}

async function recoverPassword(userData) {
  const userFound = await userDB.findEmail(userData.email);
  if (userFound) {
    const isCorrectPassword = await bcrypt.compare(
      userData.oldPassword,
      userFound.password
    );
    if (isCorrectPassword) {
      const userId = userDTO.filterId(userFound);
      bcrypt.hash(userData.newPassword, 10, async (err, hash) => {
        if (err) return err;
        const password = hash;
        const update = await userDB.updatePassword(userId, password);
      });
      return "Password update";
    }
    return "Incorrect password";
  }
  return "Email not found";
}

async function inactivateUser(user) {
  const userInactivate = await userDB.inactivateUser(user.id);
  return "User Inactive";
}

async function activateUser(user) {
  const userActivate = await userDB.reactivateUser(user.id);
  return "User Inactive";
}

async function deleteUser(user) {
  const userDelete = await userDB.deleteUser(user.id);
  return "User Inactive";
}

module.exports = {
  userLogin,
  saveUser,
  recoverPassword,
  inactivateUser,
  activateUser,
  deleteUser,
};
