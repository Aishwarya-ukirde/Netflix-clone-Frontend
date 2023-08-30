import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex item-center z-[100] justify-between w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer mt-4 ml-2 md:ml-5">
          NETFLIX
        </h1>
      </Link>
      <div className="mt-4 ">
        <Link to="/Login">
          <button className="text-white pr-4 ">Sign In</button>
        </Link>
        <Link to="/Signup">
          <button className="bg-red-600 px-2 py-2 cursor-pointer rounded text-white">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
