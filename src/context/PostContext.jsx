import { createContext, useCallback } from "react";
import { baseUrl } from "../utils/services";
import axios from "axios";

export const PostContext = createContext();
export const PostContextProvider = ({ children }) => {
  const createPost = useCallback(async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${baseUrl}/posts`,
      JSON.stringify(loginInfo)
    );
  });
};
