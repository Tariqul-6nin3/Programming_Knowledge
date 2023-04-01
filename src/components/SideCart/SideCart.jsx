import React from "react";

const SideCart = props => {
  console.log(props.readTime);
  return (
    <div className="md:sticky md:top-28 text-center mb-10 max-w-7xl mx-auto bg-slate-400 rounded-lg px-1 md:px-6 py-3">
      <h3 className="md:text-3xl text-2xl font-semibold text-white">
        Spent time on read : {props.readTime}
      </h3>
      <h3 className="md:text-3xl text-2xl font-semibold mt-3 ">
        Bookmarked Blogs :{props.bookmarks.length}
      </h3>
      {props.bookmarks.map(title => (
        <div
          className="bg-zinc-800 text-white shadow-xl px-6 rounded-xl mt-3 py-3 text-xl font-semibold text-left"
          key={title}>
          {title}
        </div>
      ))}
    </div>
  );
};

export default SideCart;
