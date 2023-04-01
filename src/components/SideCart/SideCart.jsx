import React from "react";

const SideCart = props => {
  console.log(props.readTime);
  return (
    <div className="text-center mb-10 max-w-7xl mx-auto">
      <h3 className="md:text-3xl text-2xl font-bold text-blue-500 italic">
        Spent time on read : {props.readTime}
      </h3>
      <h3 className="md:text-3xl text-2xl font-bold mt-3 italic">
        Bookmarked Blogs :{props.bookmarks.length}
      </h3>
      {props.bookmarks.map(title => (
        <div
          className="shadow-xl bg-slate-100 px-8 rounded-xl mt-3 py-3 text-2xl font-bold text-left"
          key={title}>
          {title}
        </div>
      ))}
    </div>
  );
};

export default SideCart;
