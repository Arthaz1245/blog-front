/* eslint-disable react/prop-types */
import { useState } from "react";
import Post from "./Post";

const Posts = ({ currentPosts }) => {
  return (
    <div>
      {currentPosts.length ? (
        currentPosts.map((post) => (
          <div key={post.id} className="rounded-xl border-l-amber-50">
            <Post
              id={post.id}
              title={post.title}
              author={post.author}
              date={post.date}
              content={post.content}
              img={post.img}
            />
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Posts;
