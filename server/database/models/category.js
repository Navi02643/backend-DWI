const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
  },
});

module.exports = mongoose.model("category", categorySchema);
