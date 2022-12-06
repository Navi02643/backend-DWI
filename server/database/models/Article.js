const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  articleName: {
    type: String,
  },
  publicationDate: {
    type: Date,
    default: mongoose.now()
  },
  articleContent: {
    type: String,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  public: {
    type: Boolean,
    default: false,
  },
  updateDate: {
    type: Date,
    default: mongoose.now()
  },
});

module.exports = mongoose.model("article", articleSchema);
