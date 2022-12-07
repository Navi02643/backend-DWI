const { mongo } = require("mongoose");
const CommentModel = require("./models/comments");

async function searchComments(id) {
  const findComments = await CommentModel.aggregate([
    {
      $match: {forumId: mongo.ObjectId(id)}
    },
    {
      $lookup: {
        from: "users",
        localField: "authorId",
        foreignField: "_id",
        as: "authorId",
      },
    },
  ]);
  return findComments;
}

async function createComment(data) {
  const commentModel = new CommentModel(data);
  const commentSave = await commentModel.save();
  return commentSave;
}

module.exports = { createComment, searchComments };
