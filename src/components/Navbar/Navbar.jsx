import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 bg-base-100 flex justify-between px-10 py-6">
        <div>
          <h3 className="text-2xl font-bold md:text-4xl font-sans">
            Programming <span>Knowledge</span>
          </h3>
        </div>
        <label className=" btn-circle avatar ">
          <div className="w-10 rounded-full">
            <img src="https://i.postimg.cc/VN7Njk8x/Tarik.jpg" />
          </div>
        </label>
      </div>
      <hr className="mb-5 border-slate-900" />
    </>
  );
};

export default Navbar;
