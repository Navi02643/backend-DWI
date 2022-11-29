const categoryModel = require("./models/category");

async function saveCategory(category) {
  const dataCategory = new categoryModel(category);
  const newCategory = await dataCategory.save();
  return newCategory;
}

module.exports = { saveCategory};