function categoryDate(category){
    return (category = {
        id: category._id,
        name: category.categoryName
    });
}

function categoryFilter(categories){
    const categoriesAux = [];
    categories.forEach(category => {
        if (category) {
            let dataCategory = {
                id: category._id,
                name: category.categoryName
            }
            categoriesAux.push(dataCategory);
        }
    });
    return categoriesAux;
}

module.exports = {categoryDate, categoryFilter}