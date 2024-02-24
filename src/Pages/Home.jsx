import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

const truncateWords = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  } else {
    return text;
  }
};

const BlogItem = ({ blog }) => {
  const truncatedBody = truncateWords(blog.Body, 20);

  return (
    <article className="mx-auto my-4 w-full md:w-[90%] flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
      <div>
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="h-56 w-full object-cover" alt="" />
        <div className="flex-auto px-6 py-5" key={blog.id}>
          <span className="mb-2 flex items-center text-sm font-semibold">@Ajju</span>
          <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">{blog.Title}</h3>
          <p className="mb-4 text-base font-light">{truncatedBody}</p>
          <Link to={`/show/${blog.id}`} className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</Link>
        </div>
      </div>
    </article>

  );
};

const Home = () => {
  const [loading, setLoading] = useState(true); // State to track loading status
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogs(blogData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs: ', error);
        setLoading(false); // Set loading to false even in case of an error
      }
    };

    fetchBlogs();
  }, []);



  return (

    <div>
      {loading ? (
        // Render loader while user details are loading
        <div className='grid h-screen place-items-center'><BallTriangle
          height={100}
          width={100}
          radius={5}
          color="rgb(37 99 235)"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /></div>
      ) : (
        <><Nav />
          <aside aria-label="Related Articles" className="mx-auto mt-10 max-w-screen-xl py-20">
            <h2 className="mb-8 text-center text-5xl font-bold text-gray-900">All Blogs</h2>

            <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">

              {blogs.map(blog => (
                <BlogItem key={blog.id} blog={blog} />
              ))}


            </div>
          </aside>
        </>
      )}
    </div>
  )
}

export default Home
