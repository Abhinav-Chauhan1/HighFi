import React, { useState } from 'react';
import { db } from "../firebase"; // Import Firestore instance instead of the whole db object
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore functions
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import Nav from '../Components/Nav';
import { useNavigate } from 'react-router-dom';

const Blogs = collection(db, 'blogs');

const initialState = {
    title: "",
    tags: [],
    body: ""
  };


const Create = ({user}) => {

    const navigate = useNavigate();

    const [form, setForm] = useState(initialState);

    const { title, tags, body } = form;


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleTags = (tags) => {
        setForm({ ...form, tags });
      };


    const handleSubmit = async(e) => {
        e.preventDefault();
        // Add data to the Firestore
        if(title, body, tags){
            try{
                await addDoc(Blogs, {
                    ...form,
                    timestamp: serverTimestamp(),
                    author: user.displayName,
                    userId: user.uid,
                })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
            }catch (err) {
                console.log(err);
                
        } 
    }
    navigate("/")
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
                    value={title} onChange={handleChange} name="title"
                    />
                </div>
                <div>
                <label className=""> Tags </label>
                <TagsInput
                  inputFieldPosition="bottom"
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring cursor-default"
                  value={tags}
                  addKeys="32, 13"
                  placeholder="Add a tag"
                  onChange={handleTags}
                />
                
              </div>
                <div>
                    <label className=""> Description </label>
                    <textarea type="textarea" placeholder="Description" className="resize-none mt-2 h-52 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" 
                    value={body} onChange={handleChange} name="body"/>
                </div>

                <div>
                    <button type="submit" className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">Submit</button>
                </div>
            </form>

        </div>
    );
}

export default Create;
