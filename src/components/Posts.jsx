/* eslint-disable react/prop-types */
import Post from "./Post";

const Posts = ({ currentPosts }) => {
  return (
    <div>
      {currentPosts.length ? (
        currentPosts.map((post, k) => (
          <div key={k} className="rounded-xl border-l-amber-50">
            <Post
              id={post._id}
              title={post.title}
              author={post.author}
              date={post.createdAt}
              content={post.content}
              image={post.image?.secure_url}
              likes={post?.likes.length}
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
