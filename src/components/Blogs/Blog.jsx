import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./Blog.css";

const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../../../public/fakedata/data.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="main-container">
      <div>
        {" "}
        {data.map(singledata => (
          <SingleBlog singledata={singledata}></SingleBlog>
        ))}
      </div>
      <div>
        <SideCart></SideCart>
      </div>
    </div>
  );
};

export default Blog;
