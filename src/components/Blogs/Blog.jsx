import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./Blog.css";

const Blog = () => {
  const [data, setData] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleTitle = blogTitle => {
    if (!bookmarks.includes(blogTitle)) {
      setBookmarks([...bookmarks, blogTitle.title]);
    }
  };

  const handleReadingTime = time => {
    setReadTime(time);
  };
  useEffect(() => {
    fetch("../../../public/fakedata/data.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="main-container mt-6 max-w-7xl mx-auto">
      <div>
        {data.map(singledata => (
          <SingleBlog
            key={singledata._id}
            singledata={singledata}
            handleTitle={handleTitle}
            handleReadingTime={handleReadingTime}></SingleBlog>
        ))}
      </div>
      <div>
        <SideCart bookmarks={bookmarks} readTime={readTime}></SideCart>
      </div>
    </div>
  );
};

export default Blog;
