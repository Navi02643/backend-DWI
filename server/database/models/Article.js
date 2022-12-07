const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  articleName: {
    type: String,
    require: [true,'Name is required']
  },
  publicationDate: {
    type: Date,
    default: mongoose.now()
  },
  articleContent: {
    type: String,
    require: [true,'Content is required']
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "category",
    require: [true, 'Select category']
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    require: [true, 'Select author']
  },
  public: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
  updateDate: {
    type: Date,
    default: mongoose.now()
  },
});

module.exports = mongoose.model("article", articleSchema);
