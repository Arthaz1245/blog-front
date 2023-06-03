import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
const CreatePost = () => {
  const { user } = useContext(AuthContext);

  return (
    <form>
      <input type="text" placeholder="title" />

      <input type="file" />
      <button></button>
    </form>
  );
};

export default CreatePost;
