import { createContext, useCallback, useState } from "react";
import { baseUrl } from "../utils/services";
import axios from "axios";

export const PostContext = createContext();

// eslint-disable-next-line react/prop-types
export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const createPost = useCallback(
    async (
      title,
      author,
      userId,
      content,
      category,
      image,
      setTitle,
      setContent,
      setCategory,
      setImage
    ) => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("userId", userId);
      formData.append("content", content);
      formData.append("category", category);
      formData.append("image", image);

      const response = await axios.post(`${baseUrl}/posts`, formData);
      setPosts((prev) => [...prev, response.data]);
      setTitle("");
      setContent("");
      setCategory([]);
      setImage(null);
    }
  );
  return (
    <PostContext.Provider value={{ createPost, posts }}>
      {children}
    </PostContext.Provider>
  );
};
