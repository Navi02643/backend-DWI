const mongoose = require("mongoose");
const { Schema } = mongoose;

const passwordSchema = new Schema({
  codeGen: {
    type: String,
  },
});

module.exports = mongoose.model("password", passwordSchema);
