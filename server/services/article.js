const articleDTO = require("./models/articleDTO");
const databaseFunctions = require('../database/article');

async function saveArticle(article) {
    const articleFind = await databaseFunctions.findArticleByName(article.articleName)
    //if (articleFind.articleName) return "Ya existe este artículo"
    const articleSave = await databaseFunctions.saveArticle(article);
    const filterDataArticle = articleDTO.articleDate(articleSave)
    return filterDataArticle
}

async function findArticles() {
    const articlesFind = await databaseFunctions.findArticle();

    const filterArticles = articleDTO.articleFilter(articlesFind);
    return filterArticles;
}

async function updateArticles(_id){
    const articlesUpdate = await categoryDB.updateArticle(_id);

    return articlesUpdate;
}

async function deleteArticles(_id){
    const articlesDelete = await categoryDB.deleteArticle(_id);

    return articlesDelete;
}

module.exports = { 
    saveArticle, 
    findArticles,
    updateArticles,
    deleteArticles
}