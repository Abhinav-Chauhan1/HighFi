import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db, auth } from "../firebase";
import { deleteDoc, getDoc, doc } from "firebase/firestore"; // Import doc function
import Nav from "../Components/Nav";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from 'react-loader-spinner';

const Show = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
    const user = auth.currentUser;
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        } else {
            console.log("Blog not found"); // Handle case when blog is not found
        }
    };

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
        <>
            {blog && (
                <main>
                    <Nav />
                    <article className="flex flex-col items-center">
                        <header className="mx-auto max-w-screen-xl pt-28 text-center">
                            <p className="text-gray-500">{blog.timestamp ? blog.timestamp.toDate().toDateString() : 'Unknown Date'}</p>
                            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">{blog.title}</h1>
                            <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
                                {blog.tags && blog.tags.slice(0, 3).map((tag, index) => (
                                    <button key={index} className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                                        {tag}
                                    </button>
                                ))}
                            </div>

                            <img className="sm:h-[34rem] mt-10 w-full object-contain" src={blog.imageUrl? blog.imageUrl :"https://images.unsplash.com/photo-1708876954270-8fad10609e53?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } alt="Featured Image" />
                        </header>

                        <div className="mx-auto mt-10 max-w-screen-lg space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
                            <p className="text-2xl font-medium">{blog.body}</p>
                            <div className="flex ">
                            <p className="font-medium">Written by: {blog.author}</p>
                            </div>
                            
                        </div>
                        <div>{blog.userId === user.uid? <button onClick={handleDelete} className="rounded-lg w-32 mb-20 bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Delete Blog</button> : ""}
                        </div>
                    </article>


                </main>
            )}
        </>)}
        </div>
    );
}

export default Show;
