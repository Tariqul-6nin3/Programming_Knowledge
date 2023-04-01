import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className=" bg-base-100 flex justify-between px-2 py-4">
        <div>
          <h3 className="text-2xl font-semibold md:text-3xl font-serif">
            Knowledge Cafe
          </h3>
        </div>
        <label className=" btn-circle avatar ">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
