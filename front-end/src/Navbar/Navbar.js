import React, { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between p-4">
      <div className=" flex items-center space-x-4">
        {" "}
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={22} />{" "}
        </div>
        <h1 className="text-2xl  sm:text-3xl lg:text-5xl">
          Ymc <span className="text-orange-600">Shop</span>
        </h1>
      </div>

      <div className="bg-gray-200 p-2 flex items-center rounded-2xl w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={22} />
        <input
          placeholder="Search products ..."
          className="w-full p-2  rounded-md bg-inherit text-slate-500 text-sm outline-none px-3"
        />
      </div>

      <div className="flex items-center space-x-2 [200px] ml-3 mr-5 ">
        <button className="bg-blue-600   p-2 rounded-2xl px-6 text-slate-200 flex  hidden md:block text-lg items-center">
          {" "}
          Cart <span className="mt-[-20px] text-center ml-2 text-lg">0</span>
        </button>
        <h3>Sign in</h3>
      </div>

      {nav ? (
        <div className=" bg-black/80 fixed w-full h-screen top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0  w-[350px] h-screen py-4 bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%]  w-[350px] h-screen py-4 bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(false)}
          size={22}
          className="absolute right-0 mt-2 mr-3 cursor-pointer "
        />

        <div className="py-3 px-4">
          <h1 className="text-2xl  sm:text-3xl lg:text-5xl mt-5 text-gray-700">
            Ymc <span className="text-orange-600">Shop</span>
          </h1>

          <ul className="flex flex-col space-y-5 py-4 px-4">
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>{" "}
            <li>
              <Link>Products</Link>
            </li>{" "}
            <li>
              <Link>Products</Link>
            </li>{" "}
            <li>
              <Link>Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
