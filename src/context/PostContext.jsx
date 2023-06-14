import { createContext, useCallback, useState, useEffect } from "react";
import { baseUrl } from "../utils/services";
import axios from "axios";

export const PostContext = createContext();

// eslint-disable-next-line react/prop-types
export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      setIsPostsLoading(true);
      setPostsError(null);

      const response = await axios.get(`${baseUrl}/posts`);
      setIsPostsLoading(false);
      if (response.error) {
        return setPostsError(response.statusText);
      }
      setPosts(response.data);
    };

    getPosts();
  }, []);
  const createPost = async (
    title,
    author,
    userId,
    content,
    category,
    image,
    setTitle,
    setContent,
    setCategory,
    setImage,
    setPreview
  ) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("userId", userId);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("image", image);
    try {
      console.log(formData);
      const response = await axios.post(`${baseUrl}/posts`, formData);

      setPosts((prev) => [...prev, response.data]);
      setTitle("");
      setContent("");
      setCategory([]);
      setImage("");
      setPreview("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <PostContext.Provider
      value={{ createPost, posts, isPostsLoading, postsError }}
    >
      {children}
    </PostContext.Provider>
  );
};
