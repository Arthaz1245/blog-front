import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../utils/services";
import { AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [postError, setPostError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(`${baseUrl}/posts/${id}`);
      setIsPostLoading(false);
      if (response.error) {
        return setPostError(response.statusText);
      }
      setPost(response.data);
      setLikes(response.data.likes.length);
      const included = response.data.likes.includes(user?._id);
      setIsLiked(included);

      setLikes(response.data.likes.length);
    };
    getPost();
  }, [id, user]);
  const handleLikes = async () => {
    const payload = {
      userId: user?._id,
      postId: post?._id,
    };

    const included = post.likes.filter((p) => p === user?._id);
    try {
      if (included.length) {
        await axios.put(`${baseUrl}/posts/unlikePost`, payload);
        setLikes((prevLikes) => prevLikes - 1);
      } else {
        await axios.put(`${baseUrl}/posts/likePost`, payload);
        setLikes((prevLikes) => prevLikes + 1);
      }
      // Update the post data and likes count
      const updatedPost = { ...post };
      if (included.length) {
        updatedPost.likes = updatedPost.likes.filter((p) => p !== user?._id);
      } else {
        updatedPost.likes.push(user?._id);
      }
      setPost(updatedPost);
      // setLikes(updatedPost.likes.length);
      setIsLiked(!included.length);
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {isPostLoading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <div className="h-3/6">
            <img
              src={post?.image?.secure_url}
              alt=""
              className="w-full h-1/6 object-cover"
            />
          </div>
          <div className="max-w-2xl mx-auto p-4 content-center">
            <div className="py-8">
              <h1 className="text-[#000] text-4xl font-bold  text-center">
                {post?.title}
              </h1>
            </div>

            <p className="text-gray-700 mt-2 font-mono text-2xl">
              {post?.content}
            </p>
            <div className="my-5 p-5 flex flex-row">
              {post?.category?.map((c, k) => {
                return (
                  <div
                    key={k}
                    className="bg-[#3c3939] text-[#fff] m-5 rounded-md p-5"
                  >
                    <span className="m-5">{c}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {user ? (
            <div>
              <button
                onClick={handleLikes}
                className={
                  isLiked
                    ? "bg-red-500 rounded-full p-2 focus:outline-none"
                    : "bg-[#fff] rounded-full p-2 focus:outline-none"
                }
              >
                <AiOutlineHeart className="" />
              </button>
              <p>{likes}</p>
            </div>
          ) : (
            <div>
              <p>
                if you want to leave a comment or like this post please sign in
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostDetails;
