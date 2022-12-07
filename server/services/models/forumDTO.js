function forumsFilter(forums) {
  const forumsAux = [];
  forums.forEach((forum) => {
    if (forum) {
      let authorFullName = `${forum.authorId[0].userName} ${forum.authorId[0].userMiddleName} ${forum.authorId[0].userLastName}`;
      let dataForum = {
        id: forum._id,
        forumName: forum.forumName,
        topic: forum.topic,
        publicationDate: forum.publicationDate,
        authorName: authorFullName,
        isOpen: forum.open,
      };
      forumsAux.push(dataForum);
    }
  });
  return forumsAux;
}

module.exports = { forumsFilter };
