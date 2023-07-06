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
  const [comments, setComments] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [postError, setPostError] = useState(null);
  const [contentPost, setContentPost] = useState("");
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
      setComments(response.data.comments);
      const included = response.data.likes.includes(user?._id);
      setIsLiked(included);

      setLikes(response.data.likes.length);
    };
    getPost();
  }, [id, user]);
  const handleContentChange = (e) => {
    setContentPost(e.target.value);
  };
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        userId: user?._id,
        postId: post?._id,
        content: contentPost,
      };
      const response = await axios.post(`${baseUrl}/posts/addComment`, payload);
      setComments((prev) => [...prev, response.data]);
      setContentPost("");
    } catch (error) {
      console.log(error);
    }
  };
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

      const updatedPost = { ...post };
      if (included.length) {
        updatedPost.likes = updatedPost.likes.filter((p) => p !== user?._id);
      } else {
        updatedPost.likes.push(user?._id);
      }
      setPost(updatedPost);

      setIsLiked(!included.length);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {isPostLoading && !postError ? (
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
              <div className="flex align-center justify-center my-10">
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
                <p className="mx-4">{likes}</p>
              </div>

              <div className="py-8">
                <h1 className="text-[#000] text-4xl font-bold  text-center">
                  Comments
                </h1>
              </div>
              <div className="my-8 px-10">
                <form
                  className="flex items-center"
                  onSubmit={handleCommentSubmit}
                >
                  <input
                    type="text"
                    placeholder="Add comment"
                    className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 w-[50%]"
                    value={contentPost}
                    onChange={handleContentChange}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md ml-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div className="my-8 px-10">
                {comments?.map((c, k) => {
                  return (
                    <div className="flex flex-col mb-6" key={k}>
                      <h5 className="text-lg font-semibold">{c.name}</h5>
                      <p className="text-gray-600">{c.content}</p>
                    </div>
                  );
                })}
              </div>
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
