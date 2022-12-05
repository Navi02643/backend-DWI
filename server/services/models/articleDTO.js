function articleDate(article) {
    return (article = {
        id: article._id,
        name: article.articleName
    })
}

function articleFilter(articles) {
    const articlesAux = []
    articles.forEach(article => {
        if(article){
            let dataArticle = {
                id: article._id,
                name: article.articleName
            }
            articlesAux.push(dataArticle)
        }
    });
    return articlesAux;
}

module.exports = {
    articleDate, 
    articleFilter
}