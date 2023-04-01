import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleBlog from "../SingleBlog/SingleBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blog = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleTitle = blogTitle => {
    if (bookmarks.includes(blogTitle.title)) {
      toast.warning("This blog is already bookmarked!");
      const newBookmarks = [...bookmarks, blogTitle.title];
      setBookmarks(newBookmarks);
    } else {
      const newBookmarks = [...bookmarks, blogTitle.title];
      setBookmarks(newBookmarks);
      toast.success(`This blog has been added to bookmarks!`);
    }
  };

  const handleReadingTime = time => {
    // console.log(time);
    setReadTime(readTime + time);
  };

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <>
      <ToastContainer></ToastContainer>
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
    </>
  );
};

export default Blog;
