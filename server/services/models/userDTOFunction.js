async function userLoginDTO(user) {
  return (user = {
    id: user._id,
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


module.exports = {  userLoginDTO };
