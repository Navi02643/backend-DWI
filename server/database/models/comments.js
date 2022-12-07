const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  forumId: {
    type: Schema.Types.ObjectId,
    ref: "forum",
    require: [true, 'Select forum']
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    require: [true, 'Select author']
  },
  commentDate: {
    type: Date,
    default: mongoose.now(),
  },
  comment: {
    type: String,
    require: [true,'Comment is required']
  },
});

module.exports = mongoose.model("comment", commentSchema);
