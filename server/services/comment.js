const commentDB = require('../database/comment');
const commentDTO = require('./models/commentsDTO')

async function searchCommentsService(forumId){
  const comments = await commentDB.searchComments(forumId.forumId);
  const filter = await commentDTO.filterComments(comments);
  return filter;
}

async function saveComment(data){
  const commentSave = await commentDB.createComment(data)
  return commentSave;
}

module.exports = { saveComment, searchCommentsService} 