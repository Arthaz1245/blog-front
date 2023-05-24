import React from "react";

const Post = ({ id, title, author, date, content, img }) => {
  const truncateText = (text) => {
    let shortText = text.substring(0, 200);
    if (text.length > 200) {
      shortText = shortText + "...";
    }
    return shortText;
  };
  return (
    <div className="bg-white m-8 p-4 rounded-xl sm:flex">
      <div className="w-full sm:w-1/2 lg:w-1/3 rounded-xl border-2  m-4">
        <img className="rounded-xl w-full" src={img} alt="" />
      </div>
      <div className="flex flex-col justify-between ml-0 sm:ml-4">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex justify-between mt-2">
            <h4 className="text-sm">{author}</h4>
            <h6 className="text-sm">{date}</h6>
          </div>
        </div>
        <div className="mt-4">
          <p>{truncateText(content)}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
