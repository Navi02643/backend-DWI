const mongoose = require("mongoose");
const { Schema } = mongoose;

const forumSchema = new Schema({
  forumName: {
    type: String,
    require: [true,'Name is required']
  },
  topic: {
    type: String,
    require: [true,'Topic is required']
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    require: [true, 'Select author']
  },
  publicationDate: {
    type: Date,
    default: mongoose.now(),
  },
  open: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("forum", forumSchema);
