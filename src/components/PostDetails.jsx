import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../utils/services";
const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [postError, setPostError] = useState(null);
  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(`${baseUrl}/posts/${id}`);
      setIsPostLoading(false);
      if (response.error) {
        return setPostError(response.statusText);
      }
      setPost(response.data);
      console.log(response);
    };
    getPost();
  }, []);

  return (
    <div className="bg-[#ee2828] lex flex-col justify-center items-center h-screen">
      <h1 className="color-[#fff]">{post?.title}</h1>
      <p>{post?.content}</p>
      <p>{post.category}</p>
    </div>
  );
};

export default PostDetails;
