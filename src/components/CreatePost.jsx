import { useContext, useState } from "react";
import "react-quill/dist/quill.snow.css";

import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState(null);
  const { createPost } = useContext(PostContext);
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState({});
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
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setErrors({ ...errors, title: "" });
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    setErrors({ ...errors, content: "" });
  };

  const handleCreatePost = async (e) => {
    let validationErrors = {};
    e.preventDefault();
    if (!title) {
      validationErrors.title = "Title is required";
    }

    if (!content) {
      validationErrors.content = "Content is required";
    } else if (content.length < 30) {
      validationErrors.content = "Content should have at least 30 characters";
    }

    if (category.length === 0) {
      validationErrors.category = "Please select at least one category";
    }
    if (!image) {
      validationErrors.image = "Please add an image";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      createPost(
        title,
        user,
        content,
        category,
        image,
        setTitle,
        setContent,
        setCategory,
        setImage,
        setPreview
      );

      navigate("/");
    }
  };

  // const strippedContent = stripHtmlTags(content);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setErrors({ ...errors, image: "" });
    TransformFile(file);
  };
  const handleSelectCategories = (e) => {
    setCategory([...category, e.target.value]);
    setErrors({ ...errors, category: "" });
  };

  const handleDelete = (e) => {
    setCategory(category.filter((c) => c !== e));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        onSubmit={handleCreatePost}
        className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <input
          type="text"
          placeholder="title"
          className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          onChange={handleTitleChange}
          value={title}
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">{errors.title}</p>
        )}
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
        {errors.image && (
          <p className="text-red-500 text-xs italic">{errors.image}</p>
        )}

        {preview && (
          <img
            className="m-2"
            src={preview}
            alt="chosen"
            style={{ height: "100px" }}
          />
        )}
        {/* <Editor value={content} onChange={setContent} /> */}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.content && "border-red-500"
          }`}
          onChange={handleContentChange}
          value={content}
        />
        {errors.content && (
          <p className="text-red-500 text-xs italic">{errors.content}</p>
        )}
        <select name="" id="" onChange={(e) => handleSelectCategories(e)}>
          <option disabled={true}>Select a genre</option>
          <option value="Art">Art</option>
          <option value="Cinema">Cinema</option>
          <option value="Economics">Economics</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Humor">Humor</option>
          <option value="Music">Music</option>
          <option value="News">News</option>
          <option value="Opinion">Opinion</option>
          <option value="Politics">Politics</option>
          <option value="Sports">Sports</option>
          <option value="Videogames">Videogames</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-xs italic">{errors.category}</p>
        )}
        <ul>
          {category?.map((genre) => {
            return (
              <li key={genre}>
                <button
                  className="bg-[#242323] text-white m-2 rounded-sm p-2 flex flex-row"
                  onClick={() => handleDelete(genre)}
                >
                  x {genre}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center my-4">
          <button className="bg-[#d82020] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
