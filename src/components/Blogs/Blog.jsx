import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./Blog.css";

const Blog = () => {
  const [data, setData] = useState([]);
  const handleTitle = blogTitle => {
    console.log(blogTitle);
  };
  useEffect(() => {
    fetch("../../../public/fakedata/data.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="main-container mt-6">
      <div>
        {" "}
        {data.map(singledata => (
          <SingleBlog
            singledata={singledata}
            handleTitle={handleTitle}></SingleBlog>
        ))}
      </div>
      <div>
        <SideCart></SideCart>
      </div>
    </div>
  );
};

export default Blog;
