const categoryModel = require("./models/category");

async function findCategory(){
  const categories = await categoryModel.find();

  return categories;
}

async function findCategoryByName(name){
  console.log(name);
  const findCategory = await categoryModel.findOne({'categoryName':name});

  return findCategory;
}

async function saveCategory(category) {
  const dataCategory = new categoryModel(category);
  const newCategory = await dataCategory.save();
  return newCategory;
}

async function updateCategory(id,name){
  const updateCat = await categoryModel.findOneAndUpdate(id,{$set: {categoryName: name}});
  return updateCat;
}

module.exports = { 
  findCategory, 
  findCategoryByName, 
  saveCategory,
  updateCategory
};
