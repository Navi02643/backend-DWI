function loginData(user) {
  return (user = {
    id: user._id,
    fullName:
      user.userName + " " + user.userMiddleName + " " + user.userLastName,
    email: user.email,
    isActive: user.active,
  });
}

function filterId(user) {
  return String(user._id);
}

module.exports = { loginData, filterId };
