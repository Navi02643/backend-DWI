const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  forumId: {
    type: Schema.Types.ObjectId,
    ref: "forum",
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  CommentDate: {
    type: Text,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model("comment", commentSchema);
