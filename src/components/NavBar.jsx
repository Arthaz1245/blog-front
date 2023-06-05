import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />

      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <Link
            onClick={handleNav}
            to="/"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-[#d72121d3] hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <span className="pl-4">Posts</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-[#d72121d3] hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <span className="pl-4">Writers</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-[#d72121d3] hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <span className="pl-4">About Us</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-[#d72121d3] hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <span className="pl-4">Donate</span>
          </Link>
          {user && (
            <Link
              onClick={handleNav}
              to="/create"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-[#d72121d3] hover:scale-110 hover:text-white ease-in duration-200"
              style={{ fontWeight: 800 }}
            >
              Create Post
            </Link>
          )}
          {!user && (
            <>
              <Link
                onClick={handleNav}
                to="/login"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-[#d72121d3] hover:scale-110 hover:text-white ease-in duration-200"
                style={{ fontWeight: 800 }}
              >
                <span className="pl-4">Login</span>
              </Link>
              <Link
                onClick={handleNav}
                to="/register"
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-[#d72121d3] hover:scale-110 hover:text-white ease-in duration-200"
                style={{ fontWeight: 800 }}
              >
                <span className="pl-4">Register</span>
              </Link>
            </>
          )}
        </div>
      ) : (
        <div></div>
      )}
      {user ? (
        <nav className="flex flex-col sm:flex-row p-8 bg-[#cf1f1fc2] top-0 text-white">
          <div className="flex flex-row items-center ">
            <h1 className="text-[2.0rem] font-bold font-serif">Chronique</h1>
            <div className="md:block hidden">
              <div className=" flex flex-row  ml-[6.5rem]">
                <span className="">Logged in as {user?.name}</span>
                <Link className="p-2 sm:p-5 ml-5" to="/">
                  Posts
                </Link>
                <Link className="p-2 sm:p-5 ml-5" to="/create">
                  Create Post
                </Link>
                <Link className="p-2 sm:p-5 ml-5" to="/">
                  Writers
                </Link>
                <Link className="p-2 sm:p-5 ml-5" to="/">
                  About Us
                </Link>
                <Link className="p-2 sm:p-5 ml-5" to="/">
                  Donate
                </Link>
              </div>
            </div>
          </div>
          <div className="md:block hidden flex-row sm:ml-auto items-center mt-4 sm:mt-0">
            <Link
              to="/login"
              className="p-2 sm:p-4"
              onClick={() => logoutUser()}
            >
              Logout
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="flex flex-col sm:flex-row p-8 bg-[#cf1f1fc2] top-0 text-white">
          <div className="flex flex-row items-center ">
            <h1 className="text-[2.0rem] font-bold font-serif">Chronique</h1>
            <div className="md:block hidden">
              <div className=" flex flex-row  ml-[6.5rem]">
                <Link className="p-2 sm:p-5 ml-5" to="/">
                  Posts
                </Link>

                <Link className="p-2 sm:p-5 ml-5" to="/">
                  Writers
                </Link>
                <Link className="p-2 sm:p-5 ml-5" to="/">
                  About Us
                </Link>
                <Link className="p-2 sm:p-5 ml-5" to="/">
                  Donate
                </Link>
              </div>
            </div>
          </div>
          <div className="md:block hidden flex-row sm:ml-auto items-center mt-4 sm:mt-0">
            <Link to="/login" className="p-2 sm:p-4">
              Login
            </Link>
            <Link to="/register" className="p-2 sm:p-4">
              Register
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
