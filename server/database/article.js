const articleModel = require("./models/Article");

async function findArticle() {
  const articles = await articleModel.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "authorId",
        foreignField: "_id",
        as: "authorId",
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "categoryId",
      },
    },
  ]);
  return articles;
}

async function findArticleByName(name) {
  const findArticle = await articleModel.findOne({ name: name });
  return findArticle;
}

async function saveArticle(article) {
  const dataArticle = new articleModel(article);
  const newArticle = await dataArticle.save();
  return newArticle;
}

async function updateArticle(id, data) {
  const newArticle = new articleModel(data);
  const updateArt = await articleModel.findByIdAndUpdate(
    {id},
    { $set: newArticle }
  );
  return updateArt;
}


module.exports = {
  findArticle,
  findArticleByName,
  saveArticle,
  updateArticle,
};
