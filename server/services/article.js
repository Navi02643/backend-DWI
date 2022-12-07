const articleDTO = require("./models/articleDTO");
const databaseFunctions = require('../database/article');
const userDB = require('../database/user')

async function saveArticle(article) {
    const articleFind = await databaseFunctions.findArticleByName(article.articleName)
    if (articleFind !== null){
        if (articleFind.articleName) return "Ya existe este artículo"
    }
    const articleSave = await databaseFunctions.saveArticle(article);
    return articleSave
}

async function findArticles() {
    const articlesFind = await databaseFunctions.findArticle();
    const filterArticles = articleDTO.articleFilter(articlesFind);
    return filterArticles;
}

async function updateArticles(id,data){
    const articlesUpdate = await categoryDB.updateArticle(id,data);
    return articlesUpdate;
}


module.exports = { 
    saveArticle, 
    findArticles,
    updateArticles,
}