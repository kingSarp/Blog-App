import createContext from "./createContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
        // same line of code
        // if (blogPost.id === action.payload.id) {
        //   return action.payload;
        // } else {
        //   return blogPost;
        // }
      });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    // dispatch({
    //   type: "add_blogpost",
    //   payload: { title: title, content: content },
    // });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({
      type: "edit_blogpost",
      payload: id,
    });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({
      type: "edit_blogpost",
      payload: { id: id, title: title, content: content },
    });
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },

  []
);
