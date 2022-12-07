const categoryDTO = require("./models/category");
const categoryDB = require("../database/category");
const { default: mongoose } = require("mongoose");

async function saveCategory(category) {
  if (category.categoryName == "") return "Name is required";
  const categoryFind = await categoryDB.findCategoryByName(
    category.categoryName
  );
  console.log(categoryFind);
  if (categoryFind.categoryName === category.categoryName)
    return "Ya existe esta categoría";
  const categorySave = await categoryDB.saveCategory(category);
  const filterDataCategory = categoryDTO.categoryDate(categorySave);
  return filterDataCategory;
}

async function findCategories() {
  const categoriesFind = await categoryDB.findCategory();
  const filterCategories = categoryDTO.categoryFilter(categoriesFind);
  return filterCategories;
}

async function updateCategories(id,categoryName) {
  const categoriesUpdate = await categoryDB.updateCategory(id, categoryName);
  return categoriesUpdate;
}

module.exports = {
  saveCategory,
  findCategories,
  updateCategories,
};
