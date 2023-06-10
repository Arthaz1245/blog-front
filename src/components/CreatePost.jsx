import { useContext, useState } from "react";
import "react-quill/dist/quill.snow.css";

import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";
import Editor from "./Editor";
const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const { createPost } = useContext(PostContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState(null);
  const stripHtmlTags = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
  };
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    } else {
      setPreview("");
    }
  };
  const strippedContent = stripHtmlTags(content);
  console.log("image: " + image);
  const submitPost = (e) => {
    e.preventDefault();

    createPost(
      title,
      user?.name,
      user?._id,
      content,
      category,
      image,
      setTitle,
      setContent,
      setCategory,
      setImage
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    TransformFile(file);
  };
  const handleSelectGenres = (e) => {
    const selectedGenre = e.target.value;
    if (!category.includes(selectedGenre)) {
      setCategory((prev) => [...prev, selectedGenre]);
    }
  };
  const handleRemoveGenre = (genre) => {
    setCategory((prev) => prev.filter((item) => item !== genre));
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input
          type="text"
          placeholder="title"
          className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label htmlFor="fileInput" className=" p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-image"
            viewBox="0 0 16 16"
          >
            <path d="M13.25 2H2.75C1.784 2 1 2.784 1 3.75v8.5C1 13.216 1.784 14 2.75 14h10.5c.966 0 1.75-.784 1.75-1.75v-8.5C15 2.784 14.216 2 13.25 2zm0 1.75a.25.25 0 0 1 .25.25v7a.25.25 0 0 1-.25.25H2.75a.25.25 0 0 1-.25-.25v-7a.25.25 0 0 1 .25-.25h10.5zM10 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3 2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z" />
          </svg>
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <Editor value={content} onChange={setContent} />
        <select name="" id="" onChange={(e) => handleSelectGenres(e)}>
          <option disabled={true}>Select a genre</option>
          <option value="">Art</option>
          <option value="">Cinema</option>
          <option value="">Economics</option>
          <option value="">Entertainment</option>
          <option value="">Food</option>
          <option value="">Fashion</option>
          <option value="">Humor</option>
          <option value="">Music</option>
          <option value="">News</option>
          <option value="">Opinion</option>
          <option value="">Politics</option>
          <option value="">Sports</option>
          <option value="">Videogames</option>
        </select>
        <ul>
          {category.map((genre) => {
            return (
              <li key={genre}>
                <button onClick={() => handleRemoveGenre(genre)}>
                  x{genre}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center my-4">
          <button
            onClick={submitPost}
            className="bg-[#d82020] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
