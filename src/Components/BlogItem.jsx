import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg  bg-white text-gray-900 transition hover:translate-y-1 w-full h-[500px]">
      <Link to={`/show/${blog.id}`}>
        <div className="flex flex-col">
          <img
            title={blog.title}
            src={
              blog.imageUrl
                ? blog.imageUrl
                : "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            className="h-[300px] w-full bg-cover"
            style={{ borderRadius: "20px" }}
            alt={blog.title}
          />
          <div className="flex-auto px-6 py-5 overflow-hidden flex flex-col justify-between h-[200px]">
            <span className="mb-2 flex items-center text-sm font-semibold">
              {blog.tags &&
                blog.tags.slice(0, 3).map((tag, index) => (
                  <React.Fragment key={index}>
                    <span
                      title={tag}
                      className="border-2 border-gray-700 rounded-full p-2"
                    >
                      @{tag}
                    </span>
                    {index < blog.tags.slice(0, 3).length - 1 && (
                      <span className="px-1"></span>
                    )}
                  </React.Fragment>
                ))}
            </span>
            <h3
              title={blog.title}
              className="mt-4 mb-3 text-xl font-semibold xl:text-2xl truncate"
            >
              {blog.title}
            </h3>

            <Link to={`/show/${blog.id}`}>
              <button className="mr-5 p-3 rounded-full" style={{ zIndex: 10 }}>
                <span className="text-black flex">
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-up-right-circle-fill ml-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 1.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogItem;
