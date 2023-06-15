import { createContext, useCallback, useState, useEffect } from "react";
import { baseUrl } from "../utils/services";
import axios from "axios";

export const PostContext = createContext();

// eslint-disable-next-line react/prop-types
export const PostContextProvider = ({ children, user }) => {
  const [posts, setPosts] = useState([]);
  const [inputPost, setInputPost] = useState({
    title: "",
    author: "",
    userId: "",
    content: "",
    category: [],
    image: "",
  });
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState(null);
  const updatePostInfo = useCallback((info) => {
    setInputPost(info);
  }, []);
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
  const createPost = async (e) => {
    try {
      e.preventDefault;
      setIsPostsLoading(true);
      setPostsError(null);
      // eslint-disable-next-line react/prop-types
      inputPost.userId = user._id;
      inputPost.author = user.name;

      const response = await axios.post(`${baseUrl}/posts`, inputPost);
      setPosts((prev) => [...prev, response.data]);
      setInputPost({
        title: "",
        author: "",
        userId: "",
        content: "",
        category: [],
        image: "",
      });
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <PostContext.Provider
      value={{
        createPost,
        posts,
        inputPost,
        updatePostInfo,
        isPostsLoading,
        postsError,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
