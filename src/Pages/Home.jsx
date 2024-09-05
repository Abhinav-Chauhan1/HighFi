import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import BlogItem from "../Components/BlogItem"; // Import BlogItem if it's in a separate file

const Home = () => {
  const [loading, setLoading] = useState(true); // State to track loading status
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
        setLoading(false); // Set loading to false even in case of an error
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-[96%] ml-[2%]">
      {loading ? (
        // Render loader while blogs are loading
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
          <Nav />
          <HeroSection />
          <aside
            aria-label="Related Articles"
            className="mx-auto mt-10 max-w-full py-20"
          >
            <h2 className="mb-8 text-center text-5xl font-bold text-gray-900">
              Awesome Blogs 🔥
            </h2>

            <div className="mx-auto grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
              ))}
            </div>
          </aside>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
