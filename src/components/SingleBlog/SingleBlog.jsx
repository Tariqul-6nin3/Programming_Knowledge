import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./SingleBlog.css";

const SingleBlog = props => {
  const {
    title,
    author_name,
    author_image,
    hashtag_first,
    hashtag_second,
    picture,
    published_date,
    read_time,
  } = props.singledata;
  console.log(props.singledata);
  return (
    <>
      <div className="image-container">
        <img className="w-full h-96" src={picture} alt="" />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex gap-3">
          <img src={author_image} alt="" />
          <div className="flex flex-col items-center text-left">
            <h4 className="text-md font-bold">{author_name}</h4>
            <p className="">{published_date}</p>
          </div>
        </div>
        <div>
          <p>
            {read_time}
            <span className="cursor-pointer text-xl ml-3">
              <FontAwesomeIcon icon={faBookmark} />
            </span>
          </p>
        </div>
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="flex gap-4 mt-3">
        <p>{hashtag_first}</p>
        <p>{hashtag_second}</p>
      </div>
      <div className="mb-6">
        <a href="">Mark as read</a>
      </div>
    </>
  );
};

export default SingleBlog;
