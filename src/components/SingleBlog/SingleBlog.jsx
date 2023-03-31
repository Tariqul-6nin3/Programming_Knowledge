import React from "react";

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
    <div>
      <img className="w-1/2 h-96" src={picture} alt="" />
      <div></div>
      <h3>{title}</h3>
    </div>
  );
};

export default SingleBlog;
