const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: Text,
  },
});

module.exports = mongoose.model("category", categorySchema);
