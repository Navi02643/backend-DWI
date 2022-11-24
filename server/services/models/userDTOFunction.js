function userDTO(user) {
  return (user = {
    userName: user.userName,
    userMiddleName: user.userMiddleName,
    userLastName: user.userLastName,
    email: user.email,
    password: user.password,
  });
}

async function userLoginDTO(user) {
  return (user = {
    fullName:
      user.userName +
      " " +
      user.userMiddleName +
      " " +
      user.userLastName,
    email: user.email,
    isActive: user.active,
  });
}


module.exports = { userDTO, userLoginDTO };
