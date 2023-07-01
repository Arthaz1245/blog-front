/* eslint-disable react/prop-types */
import { createContext, useCallback, useState, useEffect } from "react";
import { baseUrl } from "../utils/services";
import axios from "axios";

export const PostContext = createContext();

// eslint-disable-next-line react/prop-types
export const PostContextProvider = ({ children, user }) => {
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

  const createPost = useCallback(
    async (
      title,
      user,
      content,
      category,
      image,
      setTitle,
      setContent,
      setCategory,
      setImage,
      setPreview
    ) => {
      setIsPostsLoading(true);
      setPostsError(null);

      const formData = new FormData();
      formData.append("title", title);
      // eslint-disable-next-line react/prop-types
      formData.append("author", user.name);
      formData.append("userId", user?._id);
      formData.append("content", content);
      formData.append("category", category);
      formData.append("image", image);

      const response = await axios.post(`${baseUrl}/posts`, formData);
      if (response.error) {
        return setPostsError(response);
      }
      setPosts((prev) => [...prev, response.data]);
      setTitle("");
      setContent("");
      setCategory([]);
      setImage(null);
      setPreview(null);
    },
    []
  );

  return (
    <PostContext.Provider
      value={{
        createPost,
        posts,
        isPostsLoading,
        postsError,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
