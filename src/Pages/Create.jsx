import React, { useState } from 'react';
import { db } from "../firebase"; // Import Firestore instance instead of the whole db object
import { collection, addDoc, Timestamp } from "firebase/firestore"; // Import Firestore functions
import Nav from '../Components/Nav';
import { useNavigate } from 'react-router-dom';

const Blogs = collection(db, 'blogs');

const Create = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add data to the Firestore
        addDoc(Blogs, {
            Title: title,
            Body: body,
            published_on: Timestamp.fromDate(new Date())
        })
            .then(() => {
                setTitle(""); // Reset input fields after submission
                setBody("");
                navigate("/");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit} className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10 h-max">
                <h1 className="text-xl font-semibold lg:text-2xl">Create Blog</h1>
                <p className="pb-4 text-gray-500">Write your own Blog</p>

                <div>
                    <label className=""> Title </label>
                    <input type="text" placeholder="Title" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" 
                    alue={title} onChange={(e) => setTitle(e.target.value)} required
                    />
                </div>
                <div>
                    <label className=""> Body </label>
                    <textarea type="textarea" placeholder="Body" className="resize-none mt-2 h-52 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" 
                    value={body} onChange={(e) => setBody(e.target.value)} required/>
                </div>

                <div>
                    <button type="submit" className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">Submit</button>
                </div>
            </form>

        </div>
    );
}

export default Create;
