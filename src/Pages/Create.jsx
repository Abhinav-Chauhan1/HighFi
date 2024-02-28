import React, { useState } from 'react';
import { db, storage, auth } from "../firebase"; // Import Firestore and Storage instances
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore functions
import 'react-tagsinput/react-tagsinput.css';
import Nav from '../Components/Nav';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Storage functions
import { toast } from 'react-toastify';
import FormField from '../Components/FormField';

const Blogs = collection(db, 'blogs');

const Create = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        tags: [],
        body: ""
    });
    const [file, setFile] = useState(null);

    const user = auth.currentUser;

    const { title, tags, body } = form;


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleTags = (tags) => {
        setForm({ ...form, tags });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!title || !body) {
                toast("Please fill in all required fields");
                return;
            }

            let imageUrl = null;

            // Upload image to Firebase Storage if file is provided
            if (file) {
                const storageRef = ref(storage, file.name);
                await uploadBytes(storageRef, file);
                imageUrl = await getDownloadURL(storageRef);
            }

            // Add blog data to Firestore
            await addDoc(Blogs, {
                ...form,
                timestamp: serverTimestamp(),
                author: user.displayName,
                userId: user.uid,
                imageUrl: imageUrl
            });

            // Reset form and navigate to home page
            setForm({
                title: "",
                tags: [],
                body: ""
            });
            navigate("/");
        } catch (error) {
            console.error("Error creating blog: ", error);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit} className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10 h-max">
                <h1 className="text-xl font-semibold lg:text-2xl">Create Blog</h1>
                <p className="pb-4 text-gray-500">Write your own Blog</p>

                {/* Form fields for title, body, tags, and file */}
                <FormField label="Title" type="text" value={title} onChange={handleChange} name="title" />
                <FormField label="Description" type="textarea" value={body} onChange={handleChange} name="body" />
                <FormField label="Tags" type="tags" value={tags} onChange={handleTags} />
                <FormField label="Image" type="file" accept="image/*" onChange={handleFileChange} />

                {/* Submit button */}
                <div className='flex justify-center cursor-pointer'>
                    <button className="rounded-xl border-2 my-10 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white">Submit</button>
                </div>
            </form>
        </div>
    );
}

// Component for form fields


export default Create;
