const ForumModel = require("./models/forum");

async function searchForums() {
  const forumData = await ForumModel.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "authorId",
        foreignField: "_id",
        as: "authorId",
      },
    },
  ]);
  return forumData;
}

async function saveForum(data) {
  const forumModel = new ForumModel(data);
  const saveForum = await forumModel.save();
  return saveForum;
}

async function closeForum(id) {
  const forum = await ForumModel.findByIdAndUpdate(id, {
    $set: { open: false },
  });
  return forum;
}

module.exports = { searchForums, saveForum, closeForum };
