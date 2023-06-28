import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./components/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import CreatePost from "./components/CreatePost";
import { PostContextProvider } from "./context/PostContext";
import PostDetails from "./components/PostDetails";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <PostContextProvider user={user}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/create" element={user ? <CreatePost /> : <Login />} />
      </Routes>
    </PostContextProvider>
  );
}

export default App;
