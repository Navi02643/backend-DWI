const forumDB = require("../database/forum");
const forumDTO = require("./models/forumDTO");

async function findForums() {
  const forumFind = await forumDB.searchForums();
  const forumFilter = await forumDTO.forumsFilter(forumFind);
  return forumFilter;
}

async function forumCreate(data) {
  const saveForum = await forumDB.saveForum(data);
  return saveForum;
}

async function closeForum(data) {
  const forumClose = await forumDB.closeForum(data.id);
  return forumClose;
}

module.exports = { findForums, forumCreate, closeForum };
