function filterComments(comments) {
  const commentAux = []
  comments.forEach(comment => {
        if(comment){
            let dataComment = {
                id: comment._id,
                comment: comment.comment,
                commentDate: comment.commentDate,
                autor: `${comment.authorId[0].userName} ${comment.authorId[0].userMiddleName} ${comment.authorId[0].userLastName}`
            }
            commentAux.push(dataComment)
        }
    });
    return commentAux;
}

module.exports = { filterComments }