import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db, auth } from "../firebase";
import { deleteDoc, getDoc, doc } from "firebase/firestore";
import Nav from "../Components/Nav";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import parse from "html-react-parser"; // Correct import for HTML parser
import Swal from "sweetalert2"; // Import SweetAlert2
import "../App.css";

const Show = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    id && getBlogDetail();
  }, [id]);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, "blogs", id));
        Swal.fire("Deleted!", "Your blog has been deleted.", "success");
        navigate("/");
      } catch (error) {
        console.error("Error deleting blog:", error);
        Swal.fire("Error!", "There was an error deleting the blog.", "error");
      }
    }
  };

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    if (blogDetail.exists()) {
      setBlog(blogDetail.data());
      setLoading(false);
    } else {
      console.log("Blog not found");
    }
  };

  return (
    <div>
      {loading ? (
        <div className="grid h-screen place-items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="rgb(37 99 235)"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : (
        <>
          {blog && (
            <main>
              <Nav />
              <article className="flex flex-col md:flex-row items-start mx-auto max-w-screen-xl pt-2">
                {/* Left Side: Sticky Image */}
                <div className="relative md:w-1/3 p-4">
                  <div className="">
                    <img
                      className="w-full h-auto sticky top-0 object-cover rounded-lg"
                      src={
                        blog.imageUrl
                          ? blog.imageUrl
                          : "https://images.unsplash.com/photo-1708876954270-8fad10609e53?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt="Featured"
                    />
                  </div>
                  <div
                    className="mt-2 flex flex-wrap justify-center md:justify-start gap-2"
                    aria-label="Tags"
                  >
                    {blog.tags &&
                      blog.tags.slice(0, 3).map((tag, index) => (
                        <button
                          key={index}
                          className="rounded-lg bg-gray-200 px-2 py-1 font-medium text-gray-600 hover:bg-gray-500 hover:text-white"
                        >
                          {tag}
                        </button>
                      ))}
                  </div>
                </div>

                {/* Right Side: Blog Details */}
                <div className="md:w-2/3 p-4">
                  <header className="text-center md:text-left">
                    <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
                      {blog.title}
                    </h1>
                    <p className="text-gray-500 float-right mr-10 mt-5">
                      {blog.timestamp
                        ? blog.timestamp.toDate().toDateString()
                        : ""}
                    </p>
                    <div className="flex">
                      <p className="font-medium">Written by: {blog.author}</p>
                    </div>
                  </header>

                  <div className="mt-10 space-y-12 font-serif text-lg tracking-wide text-gray-700">
                    {/* Parse the body HTML here */}
                    <div className="blog-body">{parse(blog.body)}</div>
                  </div>

                  {blog.userId === user.uid && (
                    <div className="flex mt-10">
                      <button
                        onClick={handleDelete}
                        className="mr-4 text-white p-3 text-xl rounded-full bg-red-600 hover:bg-red-700"
                        style={{ zIndex: 10 }}
                      >
                        <span className="flex items-center text-white font-semibold">
                          Delete
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="white"
                            className="bi bi-arrow-up-right-circle-fill ml-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 1.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                          </svg>
                        </span>
                      </button>

                      <Link to={`/update/${id}`}>
                        <button
                          className="text-white p-3 rounded-full bg-blue-600 hover:bg-blue-700"
                          style={{ zIndex: 10 }}
                        >
                          <span className="flex items-center text-white  text-xl font-semibold">
                            Update
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="white"
                              className="bi bi-arrow-up-right-circle-fill ml-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 1.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                            </svg>
                          </span>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            </main>
          )}
        </>
      )}
    </div>
  );
};

export default Show;
