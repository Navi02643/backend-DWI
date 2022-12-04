const categoryDTO = require("./models/category");
const databaseFunctions = require('../database/category');

async function saveCategory(category) {
    const categoryFind = await databaseFunctions.findCategoryByName(category.categoryName)
    if (categoryFind.categoryName == category.categoryName) return "Categoria ya existente"
    const categorySave = await databaseFunctions.saveCategory(category);
    const filterDataCategory = categoryDTO.categoryDate(categorySave)
    return filterDataCategory
}

async function findCategories() {
    const categoriesFind = await databaseFunctions.findCategory();
    const filterCategories = categoryDTO.categoryFilter(categoriesFind);
    return filterCategories;
}

module.exports = { saveCategory, findCategories }