import React from "react";

// Create a context
const BlogContext = React.createContext();

// Create a provider component
export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>;
};

export default BlogContext;
