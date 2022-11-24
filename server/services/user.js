const userModel = require("./models/userDTOFunction");
const userDBFunctions = require("../database/user");

async function postUserService(user) {
  const userData = await userDBFunctions.saveUser(user);
  return userData;
}

async function postLoginService(user) {
  const isUserLogin = await userDBFunctions.findUser(user);
  const newLoginModel = userModel.userLoginDTO(isUserLogin);
  return newLoginModel;
}

module.exports = { postUserService, postLoginService };
