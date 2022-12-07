const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    require: [true,'Name is required']
  },
  userMiddleName: {
    type: String,
    require: [true,'Middle name is required']
  },
  userLastName: {
    type: String,
    require: [true,'Last name is required']
  },
  email: {
    type: String,
    require: [true,'Email is required']
  },
  password: {
    type: String,
    require: [true,'Password is required']
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("user", userSchema);
