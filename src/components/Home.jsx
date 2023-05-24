import { useState } from "react";
import Posts from "./posts";
import Pagination from "./Pagination";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 6,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 7,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 8,
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 9,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 10,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
    {
      id: 11,
      title: "Lorem Ipsum",
      author: "Andrew Velez",
      date: "2023-04-10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae suscipit est. Nam mollis interdum velit at commodo. Aliquam in tincidunt sem, nec suscipit risus. Donec at lacus feugiat, finibus lorem vitae, commodo tellus. Pellentesque tempus massa ac tortor rhoncus, vel venenatis tellus semper. Praesent dignissim, tellus et hendrerit commodo, ex arcu elementum risus, at commodo orci enim sed nulla. Fusce ac nulla consectetur, luctus risus faucibus, tempus nulla. Ut maximus bibendum purus, at cursus eros.",
      img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  return (
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
  );
};

export default Home;
