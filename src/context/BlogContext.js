import createContext from "./createContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "add_blogpost",
      payload: { title: title, content: content },
    });
    callback();
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({
      type: "edit_blogpost",
      payload: id,
    });
  };
};

const editBlogPost = (dispatch) => {
  return (id) => {
    dispatch({
      type: "delete_blogpost",
      payload: id,
    });
  };
};
export const { Context, Provider } = createContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },

  [{ title: "Test Post", content: "text content", id: 1 }]
);
