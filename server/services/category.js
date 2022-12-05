const categoryDTO = require("./models/category");
const categoryDB = require("../database/category");

async function saveCategory(category) {
    const categoryFind = await categoryDB.findCategoryByName(category.categoryName)
    if (categoryFind.categoryName == category.categoryName) 
    return "Ya existe esta categoría";

    const categorySave = await categoryDB.saveCategory(category);
    const filterDataCategory = categoryDTO.categoryDate(categorySave)
    return filterDataCategory;
    
}

async function findCategories() {
    const categoriesFind = await categoryDB.findCategory();
    const filterCategories = categoryDTO.categoryFilter(categoriesFind);
    return filterCategories;
}

async function updateCategories(_id){
    const categoriesUpdate = await categoryDB.updateCategory(_id);

    return categoriesUpdate;
}

module.exports = { 
    saveCategory, 
    findCategories,
    updateCategories
}

