import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div>
          <h3 className="text-sm md:text-3xl">Knowledge Cafe</h3>
        </div>
        <ul className="menu-container">
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
        <label className=" btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
      </div>
    </>
  );
};

export default Navbar;
