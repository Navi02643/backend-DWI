const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    require: [true,'Name is required']
  },
});

module.exports = mongoose.model("category", categorySchema);
