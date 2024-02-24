import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { deleteDoc, collection, getDoc, doc } from "firebase/firestore"; // Import doc function
import Nav from "../Components/Nav";
import { useNavigate } from "react-router-dom";

const Show = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        id && getBlogDetail()

    }, [id]);

    const handleDelete = async () => {
        try {
          // Delete the blog document from Firestore
          await deleteDoc(doc(db, 'blogs', id));
          // Reload the page after blog is deleted
          navigate("/")
        } catch (error) {
          console.error('Error deleting blog:', error);
        }
      };



    const getBlogDetail = async () => {
        const docRef = doc(db, "blogs", id);
        const blogDetail = await getDoc(docRef);
        if (blogDetail.exists()) { // Check if blogDetail exists
            setBlog(blogDetail.data());
        } else {
            console.log("Blog not found"); // Handle case when blog is not found
        }
    };

    return (
        <div>
            {blog && (
                <main>
                    <Nav />
                    <article className="flex flex-col items-center">
                        <header className="mx-auto max-w-screen-xl pt-28 text-center">
                            <p className="text-gray-500">{blog.timestamp ? blog.timestamp.toDate().toDateString() : 'Unknown Date'}</p>
                            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">{blog.Title}</h1>
                            <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
                                <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Marketing</button>
                                <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Branding</button>
                                <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Digital</button>
                                <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Identity</button>
                            </div>
                            <img className="sm:h-[34rem] mt-10 w-full object-contain" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Featured Image" />
                        </header>

                        <div className="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
                            <strong className="text-2xl font-medium">{blog.Body}</strong>
                        </div>
                        <button onClick={handleDelete} className="rounded-lg w-32 mb-20 bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Delete Blog</button>
                    </article>


                </main>
            )}
        </div>
    );
}

export default Show;
