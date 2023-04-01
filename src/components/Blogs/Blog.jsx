import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleBlog from "../SingleBlog/SingleBlog";
import Swal from "sweetalert2";

// import "./Blog.css";

const Blog = () => {
  const [data, setData] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleTitle = blogTitle => {
    if (bookmarks.includes(blogTitle.title)) {
      Swal.fire({
        title: `"${blogTitle.title}" is already bookmarked!`,
        icon: "warning",
        confirmButtonText: "OK",
      });
      const newBookmarks = [...bookmarks, blogTitle.title];
      setBookmarks(newBookmarks);
    } else {
      const newBookmarks = [...bookmarks, blogTitle.title];
      setBookmarks(newBookmarks);
      Swal.fire({
        title: `"${blogTitle.title}" has been added to bookmarks!`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReadingTime = time => {
    // console.log(time);
    setReadTime(readTime + time);
  };

  useEffect(() => {
    fetch("../../../public/fakedata/data.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="main-container mt-6 w-11/12 md:w-full md:max-w-7xl mx-auto md:grid md:grid-cols-3 gap-3">
      <div className="md:col-span-2">
        {data.map(singledata => (
          <SingleBlog
            key={singledata._id}
            singledata={singledata}
            handleTitle={handleTitle}
            handleReadingTime={handleReadingTime}></SingleBlog>
        ))}
      </div>
      <div className=" md:col-span-1">
        <SideCart bookmarks={bookmarks} readTime={readTime}></SideCart>
      </div>
    </div>
  );
};

export default Blog;
