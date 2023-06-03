import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Post = ({ id, title, author, date, content, img }) => {
  const truncateText = (text) => {
    let shortText = text.substring(0, 200);
    if (text.length > 200) {
      shortText = shortText + "...";
    }
    return shortText;
  };

  const [likeCount, setLikeCount] = useState(50);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };
  const [postCount, setpostCount] = useState(50);

  const handlePostCount = () => {
    setpostCount(postCount + 1);
  };

  return (
    <div className="bg-white m-8 p-4 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <img
            className="rounded-t-xl w-full h-full object-cover"
            src={img}
            alt=""
          />
          <div className="absolute bottom-2 right-2 text-white">
            <button
              className="bg-red-500 rounded-full p-2 focus:outline-none"
              onClick={handleLikeClick}
            >
              <AiOutlineHeart />
            </button>
            <span className="ml-2">{likeCount}</span>
          </div>
          <div className="absolute bottom-2 left-2 text-white">
            <button
              className="bg-[#1fb6d1] rounded-full p-2 focus:outline-none"
              onClick={handlePostCount}
            >
              <FaRegComment />
            </button>
            <span className="ml-2">{postCount}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <div className="flex justify-between text-sm mb-2">
              <span>{author}</span>
              <span>{date}</span>
            </div>
            <p className="mb-4">{truncateText(content)}</p>
          </div>

          <img src={img} alt="" className=" rounded-full w-[100px] h-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Post;
