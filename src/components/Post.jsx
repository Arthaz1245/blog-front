import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import moment from "moment/moment";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({ id, title, author, date, content, image, likes }) => {
  const truncateText = (text) => {
    let shortText = text.substring(0, 200);
    if (text.length > 200) {
      shortText = shortText + "...";
    }
    return shortText;
  };

  const [postCount, setpostCount] = useState(50);

  const handlePostCount = () => {
    setpostCount(postCount + 1);
  };

  return (
    <div className="bg-white m-8 p-4 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Link to={`/post/${id}`}>
            <img
              className="rounded-t-xl w-full h-full object-cover"
              src={image}
              alt=""
            />
          </Link>

          <div className="absolute bottom-2 right-2 text-white bg-[#575353a5] p-2">
            <div className="bg-red-500 rounded-full p-2 focus:outline-none">
              <AiOutlineHeart />
            </div>
            <span className="ml-2">{likes}</span>
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
            </div>
            <div className="flex justify-between text-sm mb-2">
              <time>{moment(date).format("YYYY-MM-DDTHH:mm:ss")}</time>
            </div>
            <p className="mb-4">{truncateText(content)}</p>
          </div>

          <img
            src={image}
            alt=""
            className=" rounded-full w-[100px] h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
