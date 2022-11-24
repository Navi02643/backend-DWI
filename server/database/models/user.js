const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
  },
  userMiddleName: {
    type: String,
  },
  userLastName: {
    type: String,
  },
  email: {
    type: String
  },
  password: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("user", userSchema);
