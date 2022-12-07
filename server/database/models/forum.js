const mongoose = require("mongoose");
const { Schema } = mongoose;

const forumSchema = new Schema({
  forumName: {
    type: String,
  },
  topic: {
    type: String,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  publicationDate: {
    type: Date,
  },
  open: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("forum", forumSchema);
