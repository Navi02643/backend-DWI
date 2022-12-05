const categoryModel = require("./models/category");

async function findCategory(){
  const categories = await categoryModel.find();

  return categories;
}

async function findCategoryByName(name){
  const findCategory = await categoryModel.findOne({'name':name});

  return findCategory;
}

async function saveCategory(category) {
  const dataCategory = new categoryModel(category);
  const newCategory = await dataCategory.save();
  return newCategory;
}

async function updateCategory(_id){
  const updateCat = await categoryModel.updateOne({'_id':_id});

  return updateCat;
}

module.exports = { 
  findCategory, 
  findCategoryByName, 
  saveCategory,
  updateCategory
};