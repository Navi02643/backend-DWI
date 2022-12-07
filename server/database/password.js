const PasswordModel = require('./models/passwordRecovery')

async function generateKey(data) {
  const keyModel = new PasswordModel(data);
  const keySave = await keyModel.save();
  return keySave;
}

async function searchKey(codeGen) {
  const keyData = await PasswordModel.findOne({ codeGen })
  return keyData;
}

async function deleteKey(codeGen) {
  const keyData = await PasswordModel.findOneAndRemove({ codeGen })
  return keyData;
}

module.exports = { generateKey, searchKey, deleteKey }