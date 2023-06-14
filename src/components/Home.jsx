import { useState } from "react";
import Posts from "./posts";
import Pagination from "./Pagination";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Home = () => {
  const { posts } = useContext(PostContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      {posts.length ? (
        <div>
          <Posts currentPosts={currentPosts} />
          <Pagination
            totalPosts={posts.length}
            postPerPage={postPerPage}
            setPostPerpage={setPostPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <div>
          <h1 className="text-white">No posts</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
