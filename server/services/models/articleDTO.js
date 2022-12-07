function articleDate(article) {
  return (article = {
    id: article._id,
    name: article.articleName,
    category: article.categoryId[0].categoryName,
    idCategory: article.categoryId[0]._id,
    content: article.articleContent,
    author: `${article.authorId[0].userName} ${article.authorId[0].userMiddleName} ${article.authorId[0].userLastName}`,
    date: article.publicationDate,
    isPublic: article.public,
  });
}

function articleFilter(articles) {
  const articlesAux = [];
  articles.forEach((article) => {
    if (article) {
      let dataArticle = {
        id: article._id,
        name: article.articleName,
        category: article.categoryId[0].categoryName,
        idCategory: article.categoryId[0]._id,
        content: article.articleContent,
        author: `${article.authorId[0].userName} ${article.authorId[0].userMiddleName} ${article.authorId[0].userLastName}`,
        date: article.publicationDate,
        isPublic: article.public,
      };
      articlesAux.push(dataArticle);
    }
  });
  return articlesAux;
}

module.exports = {
  articleDate,
  articleFilter,
};
