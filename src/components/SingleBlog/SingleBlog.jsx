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
  // console.log(props);
  // console.log(read_time);
  return (
    <>
      <div className="image-container border-gray-600">
        <img className="w-full md:h-96" src={picture} alt="" />
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-5 md:px-5">
        <div className="flex gap-1 md:gap-3">
          <img src={author_image} alt="" />
          <div className="flex flex-col items-center text-left">
            <h4 className="text-md font-bold mr-20">{author_name}</h4>
            <p className="text-lg font-semibold">
              {published_date} (15 days ago)
            </p>
          </div>
        </div>
        <div className="text-right mb-3">
          <p className="text-lg font-semibold">
            {read_time} min read
            <span
              className="cursor-pointer text-xl ml-3"
              onClick={() => props.handleTitle({ title })}>
              <FontAwesomeIcon icon={faBookmark} />
            </span>
          </p>
        </div>
      </div>
      <h3 className="text-2xl font-bold px-3 mt-4">{title}</h3>
      <div className="flex gap-4 mt-3">
        <p>{hashtag_first}</p>
        <p>{hashtag_second}</p>
      </div>
      <div className="mt-8 mb-10">
        <p
          className="underline text-blue-900 cursor-pointer text-xl font-semibold"
          onClick={() => props.handleReadingTime(read_time)}>
          Mark as read
        </p>
      </div>
    </>
  );
};

export default SingleBlog;
