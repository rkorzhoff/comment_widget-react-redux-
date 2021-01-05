let nextCommentId = 0;

export const addComment = (name, text, date) => {
  return {
    type: "ADD_COMMENT",
    id: nextCommentId++,
    name,
    text,
    date: new Date(),
  };
};

export const removeComment = (id) => {
  return {
    type: "REMOVE_COMMENT",
    id,
  };
};
