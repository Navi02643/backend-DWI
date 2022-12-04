const categoryModel = require("./models/category");

async function saveCategory(category) {
  const dataCategory = new categoryModel(category);
  const newCategory = await dataCategory.save();
  return newCategory;
}

async function findCategoryByName(name){
  const findCategory = await categoryModel.findOne({'name':name});
  return findCategory;
}

async function findCategory() {
  const categories = await categoryModel.find();
  return categories;
}

module.exports = { saveCategory, findCategoryByName, findCategory};