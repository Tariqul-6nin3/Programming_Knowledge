import React from "react";

const SideCart = props => {
  console.log(props);
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-blue-600">Spent time on read :</h3>
      <h3 className="text-3xl font-bold mt-3">Bookmarked Blogs :</h3>
      {props.bookmarks.map(title => (
        <div key={title}>{title}</div>
      ))}
    </div>
  );
};

export default SideCart;
