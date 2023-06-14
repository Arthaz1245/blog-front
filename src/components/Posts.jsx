/* eslint-disable react/prop-types */
import Post from "./Post";

const Posts = ({ currentPosts }) => {
  return (
    <div>
      {currentPosts.length ? (
        currentPosts.map((post) => (
          <div key={post.id} className="rounded-xl border-l-amber-50">
            <Post
              id={post._id}
              title={post.title}
              author={post.author}
              content={post.content}
              image={post.image?.secure_url}
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
