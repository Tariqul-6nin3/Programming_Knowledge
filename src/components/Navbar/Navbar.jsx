import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 bg-base-100 flex justify-between px-5 md:px-10 py-4 rounded-b-xl md:py-6 z-10">
        <div>
          <h3 className="text-xl font-bold md:text-4xl font-sans">
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
