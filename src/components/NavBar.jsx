import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-col sm:flex-row p-8 bg-[#cf1f1fc2] top-0 text-white">
      <div className="flex flex-row items-center">
        <h1 className="text-lg font-bold">Chronique</h1>
        <Link className="p-4 ml-5" to="/">
          Home
        </Link>
      </div>
      <div className="flex flex-row sm:ml-auto items-center mt-4 sm:mt-0">
        <Link to="/login" className="p-2 sm:p-4">
          Login
        </Link>
        <Link to="/register" className="p-2 sm:p-4">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
